package headless.service;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        // Hardcoded user for POC
        if ("admin".equals(username)) {
            return new User("admin", "$2a$10$fvsLVzy1Wy7jCeepa9J49e3z.bRZQxqe9WSXmT8mfMOt9jjl3t1A2", List.of(new SimpleGrantedAuthority("ROLE_USER")));

        }
        throw new UsernameNotFoundException("User not found");
    }
}

# Security policy

This repository contains defensive guidance. It should never contain a live
credential or an unredacted scanner report.

## Supported version

Only the current `main` branch and the site built from it are maintained. A
security issue in an older commit should be checked against `main` before it is
reported.

## Private reporting

Report a security concern through GitHub private vulnerability reporting when
that option is available. Otherwise, contact the maintainer without placing
sensitive details in a public issue. Never publish a token, password, private
key, validation response, sensitive file path, or affected service details in
an issue.

If a real credential is exposed, revoke or rotate it at the issuing system
before attempting repository cleanup. Removing a line or rewriting Git history
does not invalidate access or recover copies that have already left the
repository.

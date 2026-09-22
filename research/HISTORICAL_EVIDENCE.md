# Historical evidence boundary

The two JSON snapshots in this directory were copied from the repositories
planned for retirement.

The 1 September 2026 benchmark used 39 planted synthetic secrets, 18 decoys,
six unscored values, and six selected free or self-hostable scanners. Results
belong to the recorded corpus, scanner versions, configuration, modes, and run
date. They must not be used as a current procurement ranking.

The 25 August 2026 control regression used 16 fictional positive scenarios and
three safe negative scenarios against Gitleaks and TruffleHog configurations in
the former `secret-scan` repository. It tested specified control decisions. It
did not estimate production accuracy.

Synthetic non-live credentials create an important interpretation limit.
Verified-only scanning can return no results even when a detector recognizes
the formats. This is evidence about validation mode, not evidence that the
scanner has no detection capability.

Any future benchmark should run as a separately maintained and explicitly
versioned track with pinned tools, ground truth outside the scan target,
network-isolated detection, controlled validation, visible incomplete runs,
and complete provenance.

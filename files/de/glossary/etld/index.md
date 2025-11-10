---
title: eTLD
slug: Glossary/eTLD
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der Begriff **eTLD** steht für "effective top-level domain" (effektive Top-Level-Domain) und bezeichnet eine Domain, unter der Domains von einer einzelnen Organisation registriert werden können.

Eine Top-Level-Domain (TLD) ist der Teil des Domainnamens, der dem letzten Punkt folgt: zum Beispiel ist die Top-Level-Domain in `crookedtimber.org` `org`.

Angenommen, es könnten nur Domains direkt unter Top-Level-Domains von einzelnen Organisationen registriert werden. Dann wüssten Sie, dass die folgenden Domains alle derselben Organisation gehören:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

Dies funktioniert jedoch nicht als allgemeine Regel, da viele Registrare es Organisationen ermöglichen, Domains auf Ebenen unterhalb der obersten Ebene zu registrieren. Das bedeutet beispielsweise, dass `sussex.ac.uk` und `aber.ac.uk` verschiedenen Organisationen gehören.

Da dies eine Frage der Richtlinien des Registrars ist, ist es algorithmisch unmöglich festzustellen, ob ein gegebenes Domainnamensuffix (wie `ac.uk`) öffentlich registrierbar ist oder nicht. Die [Public Suffix List](https://publicsuffix.org/) ist eine Liste aller Suffixe, unter denen Organisationen direkt Namen registrieren können: das heißt, es ist eine Liste von eTLDs.

Das verwandte Konzept **eTLD+1** bedeutet eine eTLD plus den nächsten Teil des Domainnamens. Da eTLD+1s registrierbar sind, gehören alle Domains mit derselben eTLD+1 derselben Organisation.

Zum Beispiel sind die folgenden alle eTLD+1-Domains:

- crookedtimber.org
- theguardian.com
- sussex.ac.uk
- aber.ac.uk

Das bedeutet, dass alle Domains unter jeder dieser Domains derselben Organisation gehören. Zum Beispiel:

```plain
 film.theguardian.com
music.theguardian.com
```

```plain
      news.sussex.ac.uk
      blog.sussex.ac.uk
admissions.sussex.ac.uk
```

## Siehe auch

- [Public Suffix List](https://publicsuffix.org/)

---
title: eTLD
slug: Glossary/eTLD
l10n:
  sourceCommit: d32a25e2f0c6856cf46a8605c978794fee0fcb28
---

{{GlossarySidebar}}

Der Begriff **eTLD** steht für "effective top-level domain" und bezeichnet eine Domäne, unter der Domains von einer einzelnen Organisation registriert werden können.

Eine Top-Level-Domain (TLD) ist der Teil des Domainnamens, der dem letzten Punkt folgt: Zum Beispiel ist die Top-Level-Domain in `crookedtimber.org` das `org`.

Angenommen, nur Domains direkt unter Top-Level-Domains wären von einzelnen Organisationen registrierbar. Dann wüssten Sie, dass die folgenden Domains alle derselben Organisation gehörten:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

Dies funktioniert jedoch nicht als allgemeine Regel, da viele Registrare Organisationen erlauben, Domains auf Ebenen unterhalb der Top-Level-Domains zu registrieren. Dies bedeutet, dass beispielsweise `sussex.ac.uk` und `aber.ac.uk` unterschiedlichen Organisationen gehören.

Da dies eine Frage der Richtlinien des Registrars ist, ist es unmöglich, algorithmisch festzustellen, ob ein bestimmtes Domain-Suffix (wie `ac.uk`) öffentlich registrierbar ist oder nicht. Die [Public Suffix List](https://publicsuffix.org/) ist eine Liste aller Suffixe, unter denen Organisationen direkt Namen registrieren können: das heißt, sie ist eine Liste von eTLDs.

Das verwandte Konzept **eTLD+1** bedeutet eine eTLD plus den nächsten Teil des Domainnamens. Da eTLD+1s registrierbar sind, gehören alle Domains mit derselben eTLD+1 derselben Organisation.

Zum Beispiel sind alle folgenden Domänen eTLD+1 Domains:

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

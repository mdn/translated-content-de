---
title: eTLD
slug: Glossary/eTLD
l10n:
  sourceCommit: d32a25e2f0c6856cf46a8605c978794fee0fcb28
---

{{GlossarySidebar}}

Der Begriff **eTLD** steht für "effective top-level domain" und ist eine Domain, unter der Domains von einer einzelnen Organisation registriert werden können.

Eine Top-Level-Domain (TLD) ist der Teil des Domainnamens, der dem letzten Punkt folgt: Zum Beispiel ist die Top-Level-Domain in `crookedtimber.org` `org`.

Angenommen, nur Domains direkt unter Top-Level-Domains könnten von einzelnen Organisationen registriert werden. Dann könnten Sie wissen, dass die folgenden Domains alle derselben Organisation gehören:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

Dies funktioniert jedoch nicht als allgemeine Regel, da viele Registrare es Organisationen erlauben, Domains auf Ebenen unterhalb der Top-Level-Domain zu registrieren. Das bedeutet, dass zum Beispiel `sussex.ac.uk` und `aber.ac.uk` unterschiedlichen Organisationen gehören.

Da dies von den Richtlinien des Registrars abhängt, ist es unmöglich, algorithmisch zu bestimmen, ob ein bestimmtes Domainnamensuffix (wie `ac.uk`) öffentlich registrierbar ist oder nicht. Die [Public Suffix List](https://publicsuffix.org/) ist eine Liste aller Suffixe, unter denen Organisationen direkt Namen registrieren können: das heißt, es ist eine Liste von eTLDs.

Das verwandte Konzept **eTLD+1** bedeutet eine eTLD plus den nächsten Teil des Domainnamens. Da eTLD+1s registrierbar sind, gehören alle Domains mit derselben eTLD+1 derselben Organisation.

Zum Beispiel sind alle folgenden eTLD+1-Domains:

- crookedtimber.org
- theguardian.com
- sussex.ac.uk
- aber.ac.uk

Das bedeutet, dass alle Domains unter jedem dieser Domains derselben Organisation gehören. Zum Beispiel:

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

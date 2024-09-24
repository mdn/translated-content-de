---
title: effektive Top-Level-Domain (eTLD)
slug: Glossary/eTLD
l10n:
  sourceCommit: d32a25e2f0c6856cf46a8605c978794fee0fcb28
---

{{GlossarySidebar}}

Der Begriff **eTLD** steht für "effektive Top-Level-Domain" und bezieht sich auf eine Domain, unter der Domains durch eine einzelne Organisation registriert werden können.

Eine Top-Level-Domain (TLD) ist der Teil des Domainnamens, der dem letzten Punkt folgt: Zum Beispiel ist die Top-Level-Domain in `crookedtimber.org` `org`.

Angenommen, nur Domains direkt unter Top-Level-Domains könnten von einzelnen Organisationen registriert werden. Dann wüssten Sie, dass die folgenden Domains alle derselben Organisation gehörten:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

Dies ist jedoch keine allgemeine Regel, da viele Registrierungsstellen Organisationen erlauben, Domains auf Ebenen unterhalb der Top-Level-Domain zu registrieren. Das bedeutet, dass zum Beispiel `sussex.ac.uk` und `aber.ac.uk` verschiedenen Organisationen gehören.

Da dies eine Frage der Richtlinien der Registrierungsstellen ist, ist es unmöglich, algorithmisch zu bestimmen, ob ein bestimmtes Domainnamen-Suffix (wie `ac.uk`) öffentlich registrierbar ist oder nicht. Die [Public Suffix List](https://publicsuffix.org/) ist eine Liste aller Suffixe, unter denen Organisationen Namen direkt registrieren können: das heißt, es ist eine Liste von eTLDs.

Das verwandte Konzept **eTLD+1** bedeutet eine eTLD plus dem nächsten Teil des Domainnamens. Da eTLD+1s registrierbar sind, gehören alle Domains mit derselben eTLD+1 derselben Organisation.

Zum Beispiel sind alle folgenden eTLD+1-Domains:

- crookedtimber.org
- theguardian.com
- sussex.ac.uk
- aber.ac.uk

Dies bedeutet, dass alle Domains unter jeder dieser Domains derselben Organisation gehören. Zum Beispiel:

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

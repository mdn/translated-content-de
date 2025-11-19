---
title: eTLD
slug: Glossary/eTLD
l10n:
  sourceCommit: 0096eaa2dca8058c1316a7e3cb9a1579144986c9
---

Der Begriff **eTLD** steht für "effective top-level domain" und ist eine Domain, unter der Domains von einer einzelnen Organisation registriert werden können.

Eine Top-Level-Domain (TLD) ist der Teil des Domainnamens, der dem letzten Punkt folgt: Zum Beispiel ist die Top-Level-Domain in `crookedtimber.org` `org`.

Nehmen wir an, dass nur Domains direkt unter den Top-Level-Domains von einzelnen Organisationen registriert werden könnten. Dann wüssten Sie, dass die folgenden Domains alle derselben Organisation gehörten:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

Dies funktioniert jedoch nicht als allgemeine Regel, weil viele Registrare es Organisationen ermöglichen, Domains auf Ebenen unterhalb der Top-Level-Domain zu registrieren. Das bedeutet beispielsweise, dass `sussex.ac.uk` und `aber.ac.uk` von unterschiedlichen Organisationen betrieben werden.

Da dies eine Frage der Richtlinien des Registrars ist, ist es unmöglich, algorithmisch zu bestimmen, ob ein bestimmter Domainnamen-Suffix (wie `ac.uk`) öffentlich registrierbar ist oder nicht. Die [Public Suffix List](https://publicsuffix.org/) ist eine Liste aller Suffixe, unter denen Organisationen direkt Namen registrieren können: das heißt, es ist eine Liste der eTLDs.

## eTLD+1

Das verwandte Konzept **eTLD+1** bedeutet eine eTLD plus dem nächsten Teil des Domainnamens. Da eTLD+1-Domains registrierbar sind, gehören alle Domains mit demselben eTLD+1 derselben Organisation.

Zum Beispiel sind alle folgenden Domains eTLD+1-Domains:

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

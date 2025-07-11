---
title: Stilherkunft
slug: Glossary/Style_origin
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Im {{Glossary("CSS", "CSS")}} gibt es drei Kategorien von Quellen für Stiländerungen. Diese Kategorien werden als **Stilherkünfte** bezeichnet. Es handelt sich um die **Nutzer-Agent-Herkunft**, die **Nutzerherkunft** und die **Autorenherkunft**.

- Nutzer-Agent-Herkunft
  - : Die Nutzer-Agent-Herkunft ist die Stilherkunft, die aus den Standardstilen besteht, die vom Webbrowser des Nutzers verwendet werden. Wenn keine anderen Stile auf den Inhalt angewendet werden, werden die Stile der Nutzer-Agent-Herkunft beim Rendern von Elementen verwendet.
- Nutzerherkunft
  - : Die Nutzerherkunft ist die Stilherkunft, die alle CSS enthält, die der Nutzer des Webbrowsers hinzugefügt hat. Diese können von hinzugefügten Stilen über ein Entwickler-Tool oder von einer Browsererweiterung stammen, die automatisch benutzerdefinierte Stile auf Inhalte anwendet, wie etwa [Stylus](https://add0n.com/stylus.html) oder [Stylish](https://userstyles.org/).
- Autorenherkunft
  - : Die Autorenherkunft ist die Stilherkunft, die alle Stile enthält, die Teil des Dokuments sind, sei es, dass sie im {{Glossary("HTML", "HTML")}} eingebettet oder aus einer externen Stylesheet-Datei geladen wurden.

Die Stilherkünfte werden verwendet, um zu bestimmen, wo das Zurücksetzen (oder das Durchlaufen der Kaskade) von Stilen, die auf ein Element angewendet wurden, gestoppt werden soll, wenn Stile entfernt werden, zum Beispiel bei Verwendung der Schlüsselwörter {{cssxref("unset")}} oder {{cssxref("revert")}}.

## Siehe auch

- [CSS-Cascading und Vererbung: Kaskadierende Herkünfte](https://drafts.csswg.org/css-cascade-4/#cascading-origins)

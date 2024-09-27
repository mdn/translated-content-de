---
title: Style origin
slug: Glossary/Style_origin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In [CSS](/de/docs/Glossary/CSS) gibt es drei Kategorien von Quellen für Stiländerungen. Diese Kategorien werden als **style origins** bezeichnet. Sie sind die **user agent origin**, **user origin** und die **author origin**.

- User-agent origin
  - : Die user-agent origin ist die Stilquelle, die aus den Standardstilen besteht, die vom Webbrowser des Benutzers verwendet werden. Wenn keine anderen Stile auf den Inhalt angewendet werden, werden beim Rendern von Elementen die Stile der user-agent origin verwendet.
- User origin
  - : Die user origin ist die Stilquelle, die alle CSS-Stile enthält, die der Benutzer des Webbrowsers hinzugefügt hat. Diese können von hinzugefügten Stilen über ein Entwickler-Tool stammen oder von einer Browser-Erweiterung, die automatisch benutzerdefinierte Stile auf den Inhalt anwendet, wie z.B. [Stylus](https://add0n.com/stylus.html) oder [Stylish](https://userstyles.org/).
- Author origin
  - : Die author origin ist die Stilquelle, die alle Stile enthält, die Teil des Dokuments sind, sei es innerhalb des [HTML](/de/docs/Glossary/HTML) eingebettet oder aus einer externen Stylesheet-Datei geladen.

Die style origins werden verwendet, um zu bestimmen, wo mit dem Zurücksetzen (oder Zurückverfolgen) der Kaskade von Stilen, die auf ein Element angewendet wurden, aufgehört wird, wenn Stile entfernt werden, wie beim Verwenden der {{cssxref("unset")}} oder {{cssxref("revert")}} Schlüsselwörter.

## Siehe auch

- [CSS Cascading and Inheritance: Cascading Origins](https://drafts.csswg.org/css-cascade-4/#cascading-origins)

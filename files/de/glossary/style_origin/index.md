---
title: Style origin
slug: Glossary/Style_origin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In [CSS](/de/docs/Glossary/CSS) gibt es drei Kategorien von Quellen für Stiländerungen. Diese Kategorien werden als **Style Origins** bezeichnet. Sie sind der **User Agent Origin**, **User Origin** und der **Author Origin**.

- User-agent Origin
  - : Der User Agent Origin ist die Stilquelle, die aus den Standardstilen besteht, die der Webbrowser des Benutzers verwendet. Wenn keine anderen Stile auf den Inhalt angewendet werden, werden die Stile des User Agent Origin während des Renderns von Elementen verwendet.
- User Origin
  - : Der User Origin ist die Stilquelle, die alle CSS-Elemente enthält, die der Benutzer des Webbrowsers hinzugefügt hat. Diese können durch das Hinzufügen von Stilen über ein Entwicklertool oder durch eine Browsererweiterung, die automatisch benutzerdefinierte Stile auf Inhalte anwendet, wie [Stylus](https://add0n.com/stylus.html) oder [Stylish](https://userstyles.org/), stammen.
- Author Origin
  - : Der Author Origin ist die Stilquelle, die alle Stile enthält, die Teil des Dokuments sind, entweder eingebettet in das [HTML](/de/docs/Glossary/HTML) oder geladen aus einer externen Stylesheet-Datei.

Die Stilquellen werden verwendet, um festzulegen, bis wohin das Zurückrollen (oder das Zurückverfolgen) des Styles-Cascades geht, das auf ein Element angewendet wurde, wenn Stile entfernt werden, wie zum Beispiel bei der Verwendung der {{cssxref("unset")}} oder {{cssxref("revert")}} Schlüsselwörter.

## Siehe auch

- [CSS Cascading and Inheritance: Cascading Origins](https://drafts.csswg.org/css-cascade-4/#cascading-origins)

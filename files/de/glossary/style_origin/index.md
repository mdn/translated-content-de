---
title: Stilquelle
slug: Glossary/Style_origin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In {{Glossary("CSS")}} gibt es drei Kategorien von Quellen für Stiländerungen. Diese Kategorien werden als **Stilquellen** bezeichnet. Sie sind die **Benutzeragent-Quelle**, die **Benutzerquelle** und die **Autorenquelle**.

- Benutzeragent-Quelle
  - : Die Benutzeragent-Quelle ist die Stilquelle, die sich aus den Standardstilen zusammensetzt, die vom Webbrowser des Benutzers verwendet werden. Wenn keine anderen Stile auf den Inhalt angewendet werden, werden die Stile der Benutzeragent-Quelle beim Rendern von Elementen verwendet.
- Benutzerquelle
  - : Die Benutzerquelle ist die Stilquelle, die alle CSS enthält, die der Benutzer des Webbrowsers hinzugefügt hat. Diese können durch das Hinzufügen von Stilen mit einem Entwicklertool oder durch eine Browsererweiterung stammen, die automatisch benutzerdefinierte Stile auf Inhalte anwendet, wie [Stylus](https://add0n.com/stylus.html) oder [Stylish](https://userstyles.org/).
- Autorenquelle
  - : Die Autorenquelle ist die Stilquelle, die alle Stile enthält, die Teil des Dokuments sind, sei es eingebettet innerhalb des {{Glossary("HTML")}} oder aus einer externen Stylesheet-Datei geladen.

Die Stilquellen werden verwendet, um zu bestimmen, wo das Zurücksetzen (oder das Zurückverfolgen) der auf ein Element angewandten Stil-Kaskade gestoppt werden soll, wenn Stile entfernt werden, beispielsweise bei der Verwendung der Schlüsselwörter {{cssxref("unset")}} oder {{cssxref("revert")}}.

## Siehe auch

- [CSS Kaskadierung und Vererbung: Kaskadierende Ursprünge](https://drafts.csswg.org/css-cascade-4/#cascading-origins)

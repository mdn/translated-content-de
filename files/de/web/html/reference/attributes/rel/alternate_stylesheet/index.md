---
title: '`rel="alternate stylesheet"` HTML-Attributwert'
short-title: alternatives Stylesheet
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Das Schlüsselwortpaar **`alternate stylesheet`**, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, gibt an, dass die Zielressource ein _alternatives Stylesheet_ ist. Die Angabe von **alternativen Stylesheets** auf einer Webseite ermöglicht es den Benutzern, mehrere Versionen einer Seite basierend auf ihren Bedürfnissen oder Vorlieben anzuzeigen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Darstellungen anzubieten, die mit den bestehenden Vorlieben eines Benutzers funktionieren, siehe die CSS [Media Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox ermöglicht es Benutzern, alternative {{Glossary("style_sheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, welches die Werte der [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribute anzeigt. Andere Browser erfordern eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um Benutzern den Wechsel von Styles zu ermöglichen.

## Beispiele

### Alternativen Stylesheets angeben

Alternative Stylesheets werden mittels {{HTMLElement("link")}}-Elementen mit `rel="alternate stylesheet"` und `title="…"`-Attributen angegeben. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Firefox-Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Egal welcher Stil ausgewählt ist, die Regeln aus dem `reset.css`-Stylesheet werden immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"` mit `title="…"`, angegeben): wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, daher führt das Bereitstellen von Stylesheets mit unterschiedlichen Titelattributen dazu, dass einige ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit `title="…"` angegeben): standardmäßig deaktiviert, kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wenn Stylesheets mit einem `title`-Attribut im {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} oder {{HTMLElement("style")}}-Element referenziert werden, wird der Titel zu einer der dem Benutzer angebotenen Auswahlmöglichkeiten. Stylesheets, die mit demselben [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) verlinkt sind, sind Teil derselben Auswahl. Style-Sheets, die ohne `title`-Attribut verlinkt werden, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf den Standardstil zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dadurch wird dem Browser mitgeteilt, welches Stylesheet standardmäßig ausgewählt werden soll, und diese Standardeinstellung wird in Browsern angewendet, die alternative Stylesheets nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Verwenden von dynamischen Stilinformatio­nen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

---
title: rel="alternate stylesheet"
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

Das **`alternate stylesheet`** Schlüsselwortpaar, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, zeigt an, dass die Zielressource ein _alternatives Stylesheet_ ist. Das Angeben von **alternativen Stylesheets** auf einer Webseite ermöglicht es Benutzern, mehrere Versionen einer Seite basierend auf ihren Bedürfnissen oder Vorlieben zu sehen.

> [!NOTE]
> Diese Funktion wird ohne eine Erweiterung in Browsern nicht gut unterstützt. Um alternative Darstellungen anzubieten, die mit den bestehenden Vorlieben eines Benutzers funktionieren, sehen Sie sich die CSS [Media Features](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}} an.

Firefox ermöglicht es Benutzern, alternative {{Glossary("stylesheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, das die Werte der [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribute anzeigt. Andere Browser benötigen eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um Benutzern das Wechseln der Styles zu ermöglichen.

## Beispiele

### Alternative Stylesheets angeben

Alternative Stylesheets werden mit {{HTMLElement("link")}}-Elementen angegeben, die `rel="alternate stylesheet"` und `title="…"`-Attribute haben. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Firefox-Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorab ausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem `reset.css` Stylesheet immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistierend** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Bevorzugt** (hat `rel="stylesheet"`, mit `title="…"` angegeben): wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, daher werden Stylesheets mit unterschiedlichen Titelattributen dazu führen, dass einige ignoriert werden.
- **Alternativ** (`rel="alternate stylesheet"`, mit `title="…"` angegeben): standardmäßig deaktiviert, kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wird, wenn Stylesheets mit einem `title`-Attribut am {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}}- oder {{HTMLElement("style")}}-Element referenziert werden, der Titel zu einer der vom Benutzer angebotenen Auswahlmöglichkeiten. Stylesheets, die mit demselben [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) verknüpft sind, sind Teil derselben Auswahl. Stylesheets, die ohne ein `title`-Attribut verknüpft sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf den Standardstil zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Style-Sheet-Titel standardmäßig ausgewählt werden sollte und macht diese Standardauswahl in Browsern anwendbar, die keine alternativen Stylesheets unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

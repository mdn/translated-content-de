---
title: '`rel="alternate stylesheet"` HTML-Attributwert'
short-title: alternate stylesheet
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Das Schlüsselwortpaar **`alternate stylesheet`**, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, zeigt an, dass die Zielressource ein _alternatives Stylesheet_ ist. Die Angabe von **alternativen Stylesheets** auf einer Webseite ermöglicht es Benutzern, mehrere Versionen einer Seite basierend auf ihren Bedürfnissen oder Vorlieben zu sehen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den vorhandenen Präferenzen eines Benutzers funktionieren, siehe die CSS [Medienmerkmale](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox ermöglicht es Benutzern, alternative {{Glossary("stylesheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, das die Werte der [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribute anzeigt. Andere Browser erfordern eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um es den Benutzern zu ermöglichen, Styles zu wechseln.

## Beispiele

### Alternativen Stylesheets angeben

Alternative Stylesheets werden mithilfe von {{HTMLElement("link")}}-Elementen mit den Attributen `rel="alternate stylesheet"` und `title="…"` angegeben. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Firefox-Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorab ausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem `reset.css`-Stylesheet immer angewendet.

### Probieren Sie es aus

[Hier ein funktionierendes Beispiel ausprobieren](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit angegebenem `title="…"`): wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, sodass die Bereitstellung von Stylesheets mit unterschiedlichen Titelattributen dazu führen wird, dass einige von ihnen ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit angegebenem `title="…"`): standardmäßig deaktiviert, kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wird der Titel zu einer der dem Benutzer angebotenen Optionen, wenn Stylesheets über ein `title`-Attribut am {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}}- oder {{HTMLElement("style")}}-Element referenziert werden. Stylesheets, die mit demselben [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) verlinkt sind, gehören zur gleichen Auswahl. Stylesheets, die ohne ein `title`-Attribut verlinkt sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf das Standard-Stylesheet zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Style-Titel standardmäßig ausgewählt werden soll und lässt diese Standardauswahl in Browsern, die alternative Stylesheets nicht unterstützen, gelten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

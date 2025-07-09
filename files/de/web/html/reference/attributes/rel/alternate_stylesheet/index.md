---
title: rel="alternate stylesheet"
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`alternate stylesheet`** Schlüsselwortpaar, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, gibt an, dass es sich bei der Zielressource um ein _alternatives Stylesheet_ handelt. Die Angabe von **alternativen Stylesheets** auf einer Webseite ermöglicht es den Benutzern, mehrere Versionen einer Seite entsprechend ihren Bedürfnissen oder Vorlieben zu sehen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den vorhandenen Präferenzen eines Benutzers funktionieren, siehe die CSS [media features](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox ermöglicht es Benutzern, alternative {{Glossary("stylesheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, das die Werte der [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribute anzeigt. Andere Browser benötigen eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, damit Benutzer die Stile wechseln können.

## Beispiele

### Alternativ-Stylesheets angeben

Alternative Stylesheets werden mit {{HTMLElement("link")}}-Elementen mit den Attributen `rel="alternate stylesheet"` und `title="…"` angegeben. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Stile "Default Style", "Fancy" und "Basic" im Firefox-Menü _Seitenstil_ aufgeführt, wobei "Default Style" vorausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem `reset.css`-Stylesheet immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit angegebenem `title="…"`): wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, sodass das Bereitstellen von Stylesheets mit unterschiedlichen Titelattributen dazu führt, dass einige ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit angegebenem `title="…"`): standardmäßig deaktiviert, kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wird, wenn Stylesheets mit einem `title`-Attribut am {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}}- oder {{HTMLElement("style")}}-Element referenziert werden, der Titel zu einer der Auswahlmöglichkeiten, die dem Benutzer angeboten werden. Stylesheets, die mit demselben [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) verlinkt sind, gehören zur gleichen Auswahl. Stylesheets, die ohne ein `title`-Attribut verlinkt sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf den Standardstil zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Stylesheet-Titel standardmäßig ausgewählt werden sollte, und lässt diese Standardauswahl in Browsern gelten, die alternative Stylesheets nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

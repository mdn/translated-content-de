---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: 52e39f5b8a56144c7568c83afda03d27faeba356
---

{{CSSRef}}

Ein `!`-Trennzeichen gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln für die Auswahl von Deklarationen innerhalb des [Cascading-Stils](/de/docs/Web/CSS/CSS_cascade/Cascade). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu kennzeichnen, fügen Sie das _important flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` kommt nach dem Wert des Eigenschaft-Wert-Paares der Deklaration, begleitet von null oder mehr Leerzeichen. Das wichtige Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Einfluss auf die Kaskade

Bei wichtigen Deklarationen sind die [Reihenfolgen der Ursprünge und Ebenen der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das wichtige Flag überschreiben Deklarationen in den Stylesheets des Autors die Deklarationen im Stylesheet eines Benutzers, die die Deklarationen im Standard-Stylesheet des Benutzer-Agenten überschreiben.

Bei einer wichtigen Deklaration ist die Reihenfolge umgekehrt. Deklarationen, die im Stylesheet des Benutzer-Agenten als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in den Stylesheets der Benutzer. Ebenso überschreiben alle wichtigen Deklarationen in den Stylesheets der Benutzer alle wichtigen Deklarationen in den Stylesheets des Autors. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist in [@keyframes-Animationen](/de/docs/Web/CSS/@keyframes) nicht gültig.

Das Umkehren der Reihenfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie personalisierte Farbpaletten oder große Schriftarten, die Stile des Autors überschreiben können, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig markieren. Es stellt auch sicher, dass bösartige Erweiterungen die wichtigen Stile des Benutzer-Agenten nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Übergänge](/de/docs/Web/CSS/CSS_transitions). CSS-Übergänge sind eine Möglichkeit, die Geschwindigkeit zu kontrollieren, mit der sich eine Eigenschaft von einem Wert zu einem anderen ändert. Während des Übergangs von einem Wert zu einem anderen wird eine Eigenschaft keine bestimmte wichtige Deklaration erfüllen.

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

In diesem Beispiel werden die Eigenschaften `color` und `background-color` über zwei Sekunden in den Hover-Zustand übergehen. Obwohl Standardzustände normale Deklarationen sind und Hover-Zustände `!important`-Deklarationen sind, erfolgt der Übergang dennoch.

### Kaskadenebenen

Innerhalb jedes der drei Ursprünge für Stylesheets – Autor, Benutzer und Benutzer-Agent – überschreiben normale Deklarationen in ungelagerten Stilen die Deklarationen bei geschichteten Stilen, wobei die zuletzt deklarierte Vorrang vor den vorherigen Schichten hat. Wichtige Deklarationen kehren die Reihenfolge der Priorität um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Auch haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen außerhalb einer Schicht.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributen definiert sind. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig von deren Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorstilen, unabhängig von der Schicht, aber wichtige Stile aus den Stylesheets der Benutzer oder des Benutzer-Agenten und Übergänge überschreiben sie.

### !important und Spezifität

Während `!important` kein Teil der Bestimmung von Spezifität ist, ist es damit verwandt. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und der Kaskadenebene](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall der Überspezifizierung eines Selektors. Egal, wie hoch die Selektorspezifität zu einer normalen Deklaration passt, eine wichtige Deklaration aus derselben Quelle und Kaskadenebene wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und der gleichen Ebene auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Selektorspezifität entscheidend. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellenreihenfolge von Bedeutung sein.

## Einfluss auf Kurzschreibweisen

Die Deklaration einer Kurzschreibweise mit `!important` setzt alle Untereigenschaften als wichtig fest. Die folgenden beiden Selektor-Style-Blöcke sind gleichwertig:

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

Dieses Beispiel zeigt einen der mehreren Gründe, warum das Vermeiden des wichtigen Flags im Allgemeinen empfohlen wird.

## Einfluss auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Wertdeklaration einer benutzerdefinierten Eigenschaft hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

```css
:root {
  --myColor: red !important;
  --myColor: blue;
}
p {
  color: var(--myColor);
}
blockquote {
  color: var(--myColor);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In diesem Beispiel wird der Absatz rot sein, nicht blau, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila sein, weil die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Beste Praktiken

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie Ihren CSS-Code, um den Entwicklern zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Selbst wenn Sie versuchen, Stile mit hoher Spezifität zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie z.B. Stile in einem Drittanbieter-Plugin, das mit einem [id-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert ist, müssen Sie `!important` nicht verwenden. Ziehen Sie stattdessen in Betracht, das Drittanbieter-Stylesheet-Skript in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadenschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, haben Ihre Stile Vorrang vor den Widget-Stilen, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenschicht mit den erforderlichen Überschreibungen und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autor-Stylesheets, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindern wird, dass einzelne Benutzer mit speziellen Anforderungen, wie z.B. großen Schriftarten, Ihre Stile überschreiben, indem sie wichtige Stile in ihrem eigenen Benutzer-Stylesheet hinzufügen.

## Browser-Kompatibilität

Dieses Merkmal wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

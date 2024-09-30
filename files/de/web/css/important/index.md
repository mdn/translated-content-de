---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein `!`-Trennzeichen, gefolgt vom Schlüsselwort `important`, kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln zur Auswahl von Deklarationen innerhalb der [Cascade](/de/docs/Web/CSS/Cascade). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _important flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Obwohl zwischen dem Trennzeichen und dem Schlüsselwort Leerzeichen erlaubt ist, wird das Flag in der Regel ohne Leerzeichen als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important`-Flag folgt nach dem Wert des Eigenschaft-Wert-Paares der Deklaration und wird mindestens durch ein Leerzeichen getrennt. Das wichtige Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkung auf die Kaskade

Bei wichtigen Deklarationen werden die [Cascading-Ursprünge und Schicht-Ordnungen](/de/docs/Web/CSS/Cascade) umgekehrt. Ohne das wichtige Flag überschreiben Deklarationen in den Stylesheets des Autors Deklarationen in einem Benutzer-Stylesheet, die wiederum Deklarationen im Standard-Stylesheet des User-Agent überschreiben.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Priorität umgekehrt. Deklarationen, die als wichtig in den User-Agent-Stylesheets markiert sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets. Ebenso überschreiten alle wichtigen Deklarationen in den Benutzer-Stylesheets alle wichtigen Deklarationen in den Stylesheets des Autors. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes animation](/de/docs/Web/CSS/@keyframes) Deklarationen nicht gültig.

Durch die Umkehrung der Prioritätsreihenfolge für wichtige Deklarationen wird sichergestellt, dass Nutzer mit besonderen Bedürfnissen, wie personalisierten Farbschemata oder großen Schriftarten, die Stile des Autors bei Bedarf überschreiben können, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig markieren. Es wird auch garantiert, dass schädliche Erweiterungen keine wichtigen User-Agent-Stile überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Gibt es etwas, das Vorrang vor wichtigen Deklarationen hat? Ja, [Übergänge](/de/docs/Web/CSS/CSS_transitions). CSS-Übergänge sind ein Mittel, um die Geschwindigkeit zu steuern, mit der sich eine Eigenschaft von einem Wert auf einen anderen ändert. Wenn ein Übergang von einem Wert auf einen anderen erfolgt, wird eine Eigenschaft keine spezifische wichtige Deklaration einhalten.

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

In diesem Beispiel gehen die Eigenschaften `color` und `background-color` während zwei Sekunden in den Hover-Zustand über. Auch wenn die Standardzustände normale Deklarationen sind und die Hover-Zustände `!important`-Deklarationen darstellen, findet der Übergang dennoch statt.

### Kaskadenschichten

Innerhalb jedes der drei Ursprünge für Stylesheets – Autor, Benutzer und User-Agent – überschreiben normale Deklarationen in ungeschichteten Styles geschichtete Deklarationen, wobei die zuletzt deklarierten Vorrang vor den zuvor deklarierten Schichten haben. Wichtige Deklarationen kehren die Prioritätsreihenfolge um: wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen außerhalb jeder Schicht.

### Inline-Stile

Inline-Stile sind Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig von ihrem Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Stilen des Autors, unabhängig von der Schicht, aber wichtige Stile aus Stylesheets des Benutzers oder des User-Agent und Übergänge überschreiben sie.

### !important und Spezifität

Obwohl `!important` nicht Teil der Bestimmung der Spezifität ist, ist es damit verbunden. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus dem gleichen [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall der Über-Spezifizierung eines Selektors. Egal, wie hoch die Selektor-[Spezifität](/de/docs/Web/CSS/Specificity) mit einer normalen Deklaration übereinstimmt, eine wichtige Deklaration aus der gleichen Quelle und Kaskadenschicht hat immer Vorrang. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus dem gleichen Ursprung und der gleichen Schicht auf das gleiche Element angewendet werden, wählen Browser die Deklaration mit der höchsten Spezifität aus und verwenden sie.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall zählt die Spezifität des Selektors. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkung auf Kurzschreibweise-Eigenschaften

Die Deklaration einer Kurzschreibweise-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die folgenden beiden Selektor-Style-Blöcke sind äquivalent:

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

Dieses Beispiel zeigt einen der mehreren Gründe, warum das Vermeiden des wichtigen Flags allgemein empfohlen wird.

## Auswirkung auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Deklaration eines benutzerdefinierten Eigenschaftswerts hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem benutzerdefinierten Eigenschaftswert entfernt. Das `!important`-Flag wird nicht als Teil des benutzerdefinierten Eigenschaftswerts an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot und nicht blau sein, da die benutzerdefinierte Eigenschaftswertzuweisung wichtig ist. Das Blockzitat wird lila sein, weil die normale lila Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie in Ihrem CSS-Code, um den Wartenden zu erklären, warum sie diese Funktion nicht überschreiben sollten.

Selbst wenn Sie daran arbeiten, Stile mit hoher Spezifität zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie Stile in einem Drittanbieter-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert wurde, müssen Sie `!important` nicht verwenden. Erwägen Sie stattdessen, das Drittanbieter-Stylesheet-Skript in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadenschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile die Widget-Stile unabhängig von der Spezifität überschreiben.

Wenn Sie ein externes Stylesheet mit wichtigen Deklarationen überschreiben müssen, erstellen Sie eine Kaskadenschicht, die die erforderlichen Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Bedenken zur Barrierefreiheit

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autors, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindern wird, dass einzelne Benutzer mit besonderen Anforderungen, wie z.B. großen Schriftarten, Ihre Stile überschreiben können, indem sie wichtige Stile in ihrem eigenen Benutzer-Stylesheet hinzufügen.

## Browser-Kompatibilität

Dieses Feature wird von allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/Cascade)

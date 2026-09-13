---
title: CSS-Schlüsselwort `!important`
short-title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

Ein `!`-Trennzeichen gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das Flag `!important` verändert die Regeln zur Auswahl von Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu kennzeichnen, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Obwohl Leerraum zwischen dem Trennzeichen und dem Schlüsselwort zulässig ist, wird das Flag im Allgemeinen ohne Leerraum als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` steht nach dem Wert der Deklaration des Eigenschaft-Wert-Paars, wobei ihm null oder mehr Leerzeichen vorangehen. Das important-Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten: Zwischen dem Flag und dem abschließenden Semikolon der Deklaration können Leerraum und Kommentare stehen, aber nichts anderes.

## Auswirkungen auf die Kaskade

Bei wichtigen Deklarationen werden die [Reihenfolgen von Kaskadenursprung und Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction) umgekehrt. Ohne das important-Flag überschreiben Deklarationen in den Stylesheets des Autors Deklarationen in einem Stylesheet des Benutzers, welche wiederum Deklarationen im Standard-Stylesheet des User-Agents überschreiben.

Wenn eine Deklaration wichtig ist, wird die Rangfolge umgekehrt. Als wichtig gekennzeichnete Deklarationen in den Stylesheets des User-Agents überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets. Ebenso überschreiben alle wichtigen Deklarationen in Benutzer-Stylesheets alle wichtigen Deklarationen in den Stylesheets des Autors. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes-Animation](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-Deklarationen nicht gültig.

Die Umkehrung der Rangfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Anforderungen, beispielsweise personalisierten Farbschemata oder großen Schriftarten, bei Bedarf Autorenstile überschreiben können, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig kennzeichnen. Sie garantiert außerdem, dass bösartige Erweiterungen wichtige User-Agent-Stile nicht überschreiben können, was die Funktionalität beeinträchtigen oder sich negativ auf die Sicherheit auswirken könnte.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Übergänge](/de/docs/Web/CSS/Guides/Transitions). CSS-Übergänge sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich eine Eigenschaft von einem Wert zu einem anderen ändert. Während des Übergangs von einem Wert zu einem anderen entspricht eine Eigenschaft keiner bestimmten wichtigen Deklaration.

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

In diesem Beispiel wechseln die Eigenschaften `color` und `background-color` über zwei Sekunden in den Hover-Zustand. Obwohl Standardzustände normale Deklarationen und Hover-Zustände `!important`-Deklarationen sind, findet der Übergang statt.

### Kaskadenebenen

Innerhalb jedes der drei Ursprünge für Stylesheets – Autor, Benutzer und User-Agent – überschreiben normale Deklarationen in nicht geschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt deklarierte Vorrang vor den zuvor deklarierten Ebenen hat. Wichtige Deklarationen kehren die Rangfolge um: Wichtige Deklarationen in der ersten Ebene haben Vorrang vor wichtigen Deklarationen in der nächsten Ebene und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb einer Ebene erstellt wurden.

### Inline-Stile

Inline-Stile sind Stile, die mithilfe der Attribute [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) definiert werden. Sie können ebenfalls normal oder wichtig sein. Inline-_normale_ Stile haben unabhängig vom Ursprung Vorrang vor allen _normalen_ Deklarationen. Inline-_wichtige_ Stile haben unabhängig von der Ebene Vorrang vor allen anderen _wichtigen_ Autorenstilen, werden jedoch von wichtigen Stilen aus Benutzer- oder User-Agent-Stylesheets sowie von Übergängen überschrieben.

### !important und Spezifität

Obwohl `!important` nicht Teil der Bestimmung der Spezifität ist, steht es damit in Zusammenhang. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und derselben Kaskadenebene](/de/docs/Web/CSS/Guides/Cascade/Introduction).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall, in dem ein Selektor übermäßig spezifiziert wird. Unabhängig davon, wie hoch die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) eines Selektors mit einer normalen Deklaration übereinstimmt, hat eine wichtige Deklaration aus derselben Quelle und Kaskadenebene immer Vorrang. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen desselben Ursprungs und derselben Ebene auf dasselbe Element angewendet werden, wählen Browser die Deklaration mit der höchsten Spezifität aus und verwenden sie.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Spezifität des Selektors relevant. Nur wenn die Selektoren dieselbe Spezifität hätten, wäre die Reihenfolge im Quelltext relevant.

## Auswirkungen auf Kurzschreibweisen

Das Deklarieren einer Kurzschreibweise mit `!important` setzt alle Untereigenschaften als wichtig. Die beiden folgenden Stilblöcke für Selektoren sind gleichwertig:

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

Dieses Beispiel zeigt einen von mehreren Gründen, warum im Allgemeinen empfohlen wird, das important-Flag zu vermeiden.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das Flag `!important` zu einer Wertdeklaration einer benutzerdefinierten Eigenschaft hinzugefügt wird, macht es die Wertzuweisung wichtig. Das Flag `!important` wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das Flag `!important` wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die Funktion [`var()`](/de/docs/Web/CSS/Reference/Values/var) übergeben.

```css
:root {
  --my-color: red !important;
  --my-color: blue;
}
p {
  color: var(--my-color);
}
blockquote {
  color: var(--my-color);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In diesem Beispiel wird der Absatz rot und nicht blau sein, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila sein, weil die normale lila Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Bewährte Methoden

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie in Ihrem CSS-Code, um den Wartenden zu erklären, warum sie diese Funktion nicht überschreiben sollten.

Selbst wenn Sie Stile mit hoher Spezifität überschreiben möchten, die Sie nicht kontrollieren, beispielsweise Stile in einem Drittanbieter-Plugin, die mit einem [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) deklariert wurden, müssen Sie `!important` nicht verwenden. Erwägen Sie stattdessen, das Stylesheet-Skript des Drittanbieters als erste Kaskadenebene in eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, haben Ihre Stile unabhängig von der Spezifität Vorrang vor den Widget-Stilen.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenebene mit den erforderlichen Überschreibungen und deklarieren Sie diese Ebene zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor wichtigen Deklarationen im Stylesheet des Autors. Das bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website einzelne Benutzer mit besonderen Anforderungen, beispielsweise großen Schriftarten, nicht daran hindert, Ihre Stile durch das Hinzufügen wichtiger Stile in ihrem eigenen Benutzer-Stylesheet zu überschreiben.

## Browser-Kompatibilität

Diese Funktion wird von allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)

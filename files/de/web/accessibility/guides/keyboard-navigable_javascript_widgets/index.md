---
title: Tastaturnavigierbare JavaScript-Widgets
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Webanwendungen verwenden häufig JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten nachzuahmen. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }} und {{ HTMLElement("span") }}-Elementen, die von Natur aus nicht die gleiche Tastaturfunktionalität bieten wie ihre Desktop-Pendants. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets tastaturzugänglich zu machen.

## Verwendung von tabindex

Standardmäßig erhalten beim Drücken der Tabulatortaste auf einer Webseite nur interaktive Elemente (wie Links, Formularelemente) den Fokus. Mit dem `tabindex` [globalen Attribut](/de/docs/Web/HTML/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Wenn es auf `0` gesetzt ist, wird das Element durch Tastatur und Skript fokussierbar. Wenn es auf `-1` gesetzt ist, wird das Element durch Skript fokussierbar, gehört aber nicht zum Tastatur-Fokus-Order.

Die Reihenfolge, in der Elemente beim Drücken der Tastatur den Fokus erhalten, ist standardmäßig die Quellreihenfolge. In Ausnahmefällen möchten Autoren die Reihenfolge neu definieren. Dazu können Autoren `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung von positiven Werten für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den Standard-Interaktivelementen auf der Seite platziert, was bedeutet, dass Seitenautoren die `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite setzen (und pflegen) müssen, wann immer sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code>-Attribut</th>
      <th>Fokussierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Tab navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Folgt der Plattform-Konvention des Elements (ja für Formularelemente, Links usw.).</td>
      <td>Folgt der Plattform-Konvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (d.h. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in Reaktion auf Pfeil- oder andere Tastendrücke fokussieren.</td>
    </tr>
    <tr>
      <td>Null (d.h. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>Im Tab-Order relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben, sie benötigen das Attribut nicht).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der <code>tabindex</code>-Wert bestimmt, wo sich dieses Element in der Tab-Reihenfolge befindet: kleinere Werte positionieren Elemente früher in der Tab-Reihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerelemente

Interaktive native HTML-Elemente wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }} sind bereits tastaturzugänglich, daher ist die Verwendung eines dieser Elemente der schnellste Weg, um Komponenten tastaturfreundlich zu gestalten.

Autoren können auch eine {{ HTMLElement("div") }} oder ein {{ HTMLElement("span") }} tastaturzugänglich machen, indem sie `tabindex` auf `0` setzen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die in HTML nicht existieren.

### Gruppierung von Steuerelementen

Für die Gruppierung von Widgets wie Menüs, Tabellen, Rastern oder Baumstrukturen sollte das Elternelement in der Tab-Reihenfolge sein (`tabindex="0"`), und jede nachfolgende Auswahl/Tab/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten die nachfolgenden Elemente mit den Pfeiltasten navigieren können. (Eine vollständige Beschreibung der normalerweise erwarteten Tastaturunterstützung für typische Widgets finden Sie in den [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einem verschachtelten Menü-Steuerelement. Sobald der Tastaturfokus auf das enthaltende {{ HTMLElement("ul") }}-Element fällt, muss der JavaScript-Entwickler den Fokus programmatisch verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Verwalten des Fokus innerhalb von Gruppen" unten.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Font
    <ul id="fontMenu" title="Font" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italics</li>
      <li id="bold" tabindex="-1">Bold</li>
      <li id="underline" tabindex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Justification
    <ul id="justificationMenu" title="Justification" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### Deaktivierte Steuerelemente

Wenn ein benutzerdefiniertes Steuerelement deaktiviert wird, entfernen Sie es aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüelemente in einem Menü) weiterhin mit den Pfeiltasten navigierbar bleiben sollten.

## Verwalten des Fokus innerhalb von Gruppen

Wenn ein Benutzer ein Widget verlässt und zurückkehrt, sollte der Fokus auf das spezifische Element zurückkehren, das den Fokus hatte, zum Beispiel auf das Baum-Element oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Bewegender `tabindex`: Programmatisch den Fokus verschieben
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Bewegender tabindex

Durch das Setzen des `tabindex` des fokussierten Elements auf "0" wird sichergestellt, dass, wenn der Benutzer das Widget verlässt und dann zurückkehrt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass das Aktualisieren des `tabindex` auf "0" auch erfordert, dass das zuvor ausgewählte Element auf `tabindex="-1"` aktualisiert wird. Diese Technik beinhaltet das programmatische Verschieben des Fokus in Reaktion auf Tastenereignisse und das Aktualisieren des `tabindex`, um den aktuell fokussierten Artikel widerzuspiegeln. Um dies zu tun:

Binden Sie einen "Keydown"-Handler an jedes Element in der Gruppe und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. Programmatisch den Fokus auf das neue Element anwenden,
2. Den `tabindex` des fokussierten Elements auf "0" aktualisieren und
3. Den `tabindex` des zuvor fokussierten Elements auf "-1" aktualisieren.

Hier ist ein Beispiel für eine [WAI-ARIA Baumansicht](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html), die diese Technik verwendet.

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzelnen Ereignishandlers an das Container-Widget und die Verwendung des `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Weitere Informationen über ARIA finden Sie in diesem [Überblick über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

Die `aria-activedescendant`-Eigenschaft identifiziert die ID des nachfolgenden Elements, das derzeit den virtuellen Fokus hat. Der Ereignishandler im Container muss auf Tasten- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt wird (zum Beispiel mit einem Rand oder einer Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwendung von Fokusereignissen

- Versenden Sie das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis nicht, um den Fokus auf ein Element zu setzen. DOM-Fokusereignisse werden nur als informativ betrachtet: Sie werden vom System nach dem Fokussieren eines Elements generiert, aber nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.
- Hören Sie auf die [`focus`](/de/docs/Web/API/Element/focus_event)- und [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignisse, um Fokusänderungen zu verfolgen. Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tastatur- und Mausereignisse erfolgen: Hilfstechnologien wie Screenreader können den Fokus auf jedes fokussierbare Element setzen. Wenn Sie den Fokusstatus für das gesamte Dokument verfolgen möchten, können Sie [`document.activeElement`](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten, oder [`document.hasFocus`](/de/docs/Web/API/Document/hasFocus), um sicherzustellen, dass das aktuelle Dokument den Fokus hat.

### Stellen Sie sicher, dass Tastatur und Maus die gleiche Erfahrung bieten

Um sicherzustellen, dass die Benutzererfahrung konsistent ist, unabhängig vom Eingabegerät, sollten Tastatur- und Mausereignishandler bei Bedarf Code gemeinsam nutzen. Beispielsweise sollte der Code, der den `tabindex` oder das Styling aktualisiert, wenn Benutzer mit den Pfeiltasten navigieren, auch von den Mausklick-Handlern verwendet werden, um die gleichen Änderungen vorzunehmen.

### Stellen Sie sicher, dass die Tastatur verwendet werden kann, um Elemente zu aktivieren

Um sicherzustellen, dass die Tastatur verwendet werden kann, um Elemente zu aktivieren, sollten alle an Mausereignisse gebundenen Handler auch an Tastaturereignisse gebunden werden. Beispiel: Um sicherzustellen, dass die Eingabetaste ein Element aktiviert, wenn Sie ein `onclick="doSomething()"` haben, sollten Sie `doSomething()` auch an das "Keydown"-Ereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Zeichnen Sie immer den Fokus für tabindex="-1"-Items und Elemente, die programmatisch den Fokus erhalten

Stellen Sie sicher, dass fokussierte Elemente einen Fokusring haben. Dies kann mithilfe der CSS {{cssxref("outline")}}-Eigenschaft erfolgen, die nicht bedingungslos auf `none` gesetzt werden sollte—wenn Sie verhindern möchten, dass unnötige Fokusringe angezeigt werden, verwenden Sie die {{cssxref(":focus-visible")}}-Pseudoklasse.

### Verhindern Sie, dass benutze Tastenevents Browserfunktionen ausführen

Wenn Ihr Widget ein Tastenevent behandelt, verhindern Sie, dass der Browser es ebenfalls behandelt (z.B. das Scrollen in Reaktion auf die Pfeiltasten), indem Sie den Rückgabecode Ihres Ereignishandlers verwenden. Wenn Ihr Ereignishandler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis konsumiert, was den Browser daran hindert, eine Aktion basierend auf dem Tastenanschlag auszuführen.

### Verlassen Sie sich an dieser Stelle nicht auf konsistentes Verhalten bei Tastenwiederholungen

Leider kann `onkeydown` je nach Browser und Betriebssystem wiederholt werden oder nicht.

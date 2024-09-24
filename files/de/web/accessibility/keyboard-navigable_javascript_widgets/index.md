---
title: Mit der Tastatur navigierbare JavaScript-Widgets
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{AccessibilitySidebar}}

Webanwendungen nutzen häufig JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkartensätze zu imitieren. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }}- und {{ HTMLElement("span") }}-Elementen, die von Natur aus nicht die gleiche Tastaturfunktionalität wie ihre Desktop-Gegenstücke bieten. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mit der Tastatur zugänglich zu machen.

## Verwendung von tabindex

Standardmäßig wird beim Durchsuchen einer Webseite mit der Tabulatortaste nur auf interaktive Elemente (wie Links, Formularelemente) fokussiert. Mit dem globalen Attribut `tabindex` [global attribute](/de/docs/Web/HTML/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Wird es auf `0` gesetzt, wird das Element per Tastatur und Skript fokussierbar. Bei einem Wert von `-1` wird das Element durch das Skript fokussierbar, gehört jedoch nicht zur Tastatur-Fokusreihenfolge.

Die Reihenfolge, in der Elemente beim Verwenden einer Tastatur fokussiert werden, ist standardmäßig die Quellreihenfolge. In Ausnahmefällen möchten Autoren die Reihenfolge neu definieren. Dazu können Autoren `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung positiver Werte für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den standardmäßigen interaktiven Elementen auf der Seite platziert, was bedeutet, dass Seitenautoren die `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite festlegen (und pflegen) müssen, sobald sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code>-Attribut</th>
      <th>Fokussierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Mit Tab navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Folgt der Plattformkonvention des Elements (ja für Formularelemente, Links, etc.).</td>
      <td>Folgt der Plattformkonvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (z.B. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element in Reaktion auf Pfeil- oder andere Tastendrücke mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> fokussieren.</td>
    </tr>
    <tr>
      <td>Null (z.B. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In Tab-Reihenfolge relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben, sie benötigen das Attribut nicht).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der `tabindex`-Wert bestimmt, wo dieses Element in der Tab-Reihenfolge positioniert ist: Kleinere Werte positionieren Elemente früher in der Tab-Reihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerelemente

Native HTML-Elemente, die interaktiv sind, wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }}, sind bereits mit Tastaturen zugänglich, daher ist die Verwendung eines solchen der schnellste Weg, um Komponenten mit Tastaturen kompatibel zu machen.

Autoren können auch ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} durch Hinzufügen eines `tabindex` von `0` tastaturzugänglich machen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die nicht in HTML existieren.

### Gruppierung von Steuerelementen

Für gruppierte Widgets wie Menüs, Registerkartenlisten, Gitter oder Baumansichten sollte das übergeordnete Element in der Tab-Reihenfolge sein (`tabindex="0"`), und jede nachfolgende Auswahl/Tab/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten die nachfolgenden Elemente mit den Pfeiltasten navigieren können. (Für eine vollständige Beschreibung der Tastaturunterstützung, die normalerweise für typische Widgets erwartet wird, siehe [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt, wie diese Technik mit einem verschachtelten Menüsteuerelement verwendet wird. Sobald der Tastaturfokus auf das enthaltende {{ HTMLElement("ul") }}-Element fällt, muss der JavaScript-Entwickler den Fokus programmatisch verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Verwaltung des Fokus innerhalb von Gruppen" unten.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Schriftart
    <ul id="fontMenu" title="Schriftart" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Stil
    <ul id="styleMenu" title="Stil" tabindex="-1">
      <li id="italic" tabindex="-1">Kursiv</li>
      <li id="bold" tabindex="-1">Fett</li>
      <li id="underline" tabindex="-1">Unterstrichen</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Ausrichtung
    <ul id="justificationMenu" title="Ausrichtung" tabindex="-1">
      <li id="left" tabindex="-1">Links</li>
      <li id="center" tabindex="-1">Zentriert</li>
      <li id="right" tabindex="-1">Rechts</li>
      <li id="justify" tabindex="-1">Blocksatz</li>
    </ul>
  </li>
</ul>
```

#### Deaktivierte Steuerelemente

Wenn ein benutzerdefiniertes Steuerelement deaktiviert wird, entfernen Sie es aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüpunkte in einem Menü) über die Pfeiltasten navigierbar bleiben sollten.

## Verwaltung des Fokus innerhalb von Gruppen

Wenn ein Benutzer von einem Widget weg- und wieder zurück wechselt, sollte der Fokus auf das spezielle Element zurückkehren, das den Fokus hatte, z.B. der Baumknoten oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Roving `tabindex`: Programmatische Verschiebung des Fokus
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Roving tabindex

Das Setzen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer von dem Widget wegtabuliert und dann zurückkehrt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass die Aktualisierung des `tabindex` auf "0" erfordert, dass das zuvor ausgewählte Element auf `tabindex="-1"` aktualisiert wird. Diese Technik beinhaltet die programmatische Verschiebung des Fokus in Reaktion auf Tasteneingaben und die Aktualisierung des `tabindex`, um das aktuell fokussierte Element zu reflektieren. Um dies zu tun:

Binden Sie einen Keydown-Handler an jedes Element in der Gruppe, und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. Fokussieren Sie das neue Element programmatisch,
2. aktualisieren Sie den `tabindex` des fokussierten Elements auf "0", und
3. aktualisieren Sie den `tabindex` des zuvor fokussierten Elements auf "-1".

Hier ist ein Beispiel für eine [WAI-ARIA Baumansicht](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html), die diese Technik verwendet.

### Tipps

#### Verwenden von element.focus() zum Setzen des Fokus

Verwenden Sie nicht `createEvent()`, `initEvent()` und `dispatchEvent()`, um den Fokus auf ein Element zu senden. DOM-Fokusereignisse gelten nur als informativ: vom System nach dem Fokussieren generiert, aber nicht tatsächlich zum Setzen des Fokus verwendet. Verwenden Sie stattdessen `element.focus()`.

#### Verwenden von onfocus zur Verfolgung des aktuellen Fokus

Gehen Sie nicht davon aus, dass alle Fokusänderungen über Schlüssel- und Mausereignisse erfolgen: Assistenztechnologien wie Bildschirmlesegeräte können den Fokus auf jedes fokussierbare Element setzen. Verfolgen Sie den Fokus mithilfe von `onfocus` und `onblur`.

`onfocus` und `onblur` können jetzt mit jedem Element verwendet werden. Es gibt keine standardisierte DOM-Schnittstelle, um den aktuellen Dokumentenfokus zu erhalten. Wenn Sie den Fokusstatus verfolgen möchten, können Sie das [document.activeElement](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten. Sie können auch [document.hasFocus](/de/docs/Web/API/Document/hasFocus) verwenden, um sicherzustellen, dass der aktuelle Dokumentenfokus besteht.

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzigen Ereignishandlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Weitere Informationen zu ARIA finden Sie in dieser [Übersicht über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).)

Die Eigenschaft `aria-activedescendant` identifiziert die ID des nachfolgenden Elements, das derzeit den virtuellen Fokus hat. Der Ereignishandler im Container muss auf Tasten- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt wird (zum Beispiel durch einen Rahmen oder eine Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwenden von onkeydown, um Tastenevents abzufangen, nicht onkeypress

IE löst keine `keypress`-Ereignisse für nicht alphabetische Tasten aus. Verwenden Sie stattdessen `onkeydown`.

### Sicherstellen, dass Tastatur und Maus die gleiche Erfahrung bieten

Um sicherzustellen, dass die Benutzererfahrung unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Maus-Ereignishandler, wo es angebracht ist, denselben Code verwenden. Zum Beispiel sollte der Code, der den `tabindex` oder das Styling aktualisiert, wenn Benutzer die Pfeiltasten verwenden, auch von der Mausklickhandhabung verwendet werden, um dieselben Änderungen hervorzurufen.

### Sicherstellen, dass die Tastatur zum Aktivieren des Elements verwendet werden kann

Um sicherzustellen, dass die Tastatur zum Aktivieren von Elementen verwendet werden kann, sollten alle an Mausereignisse gebundenen Handler auch an Tastaturereignisse gebunden werden. Zum Beispiel, damit die Eingabetaste ein Element aktiviert, wenn Sie ein `onclick="doSomething()"` haben, sollten Sie `doSomething()` auch an das Tastedruckereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Immer den Fokus für tabindex="-1" Elemente und Elemente, die programmatisch fokussiert werden, darstellen

IE zeigt den Fokusumriss nicht automatisch für Elemente, die programmatisch fokussiert werden. Wählen Sie zwischen der Änderung der Hintergrundfarbe über etwas wie `this.style.backgroundColor = "gray";` oder fügen Sie eine gepunktete Umrandung über `this.style.border = "1px dotted invert"` hinzu. Im Fall der gepunkteten Umrandung müssen Sie sicherstellen, dass diese Elemente zu Beginn eine unsichtbare 1px-Umrandung haben, damit das Element nicht wächst, wenn der Umrandungsstil angewendet wird (Umrandungen nehmen Raum ein, und IE implementiert keine CSS-Umrisse).

### Verhindern, dass verwendete Tastendrücke auch von der Browserfunktion ausgeführt werden

Wenn Ihr Widget ein Tastenevent behandelt, verhindern Sie, dass der Browser es ebenfalls verarbeitet (zum Beispiel durch Scrollen als Reaktion auf Pfeiltasten), indem Sie den Rückgabewert Ihres Ereignishandlers verwenden. Wenn Ihr Ereignishandler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht, sodass der Browser keine Aktion basierend auf dem Tastendruck ausführt.

### Verlassen Sie sich zum jetzigen Zeitpunkt nicht auf konsistentes Verhalten bei Tastendrücken

Leider kann `onkeydown` abhängig davon, welchen Browser und welches Betriebssystem Sie verwenden, wiederholt oder nicht wiederholt werden.

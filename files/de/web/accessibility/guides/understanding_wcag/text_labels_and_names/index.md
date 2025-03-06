---
title: Textbeschreibungen und Namen
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Es gibt viele Situationen, in denen einem Steuerelement, Dialogfenster oder einem anderen Website-Feature ein beschreibender Name oder ein Label zugewiesen werden sollte, um Nutzern von unterstützenden Technologien zu ermöglichen, dessen Zweck zu verstehen und korrekt zu bedienen. In dieser Kategorie gibt es verschiedene Arten von Problemen, die in unterschiedlichen Kontexten auftreten, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das alt-Attribut, um Bereichselemente zu kennzeichnen, die das href-Attribut haben

Bei Bildkarten geben Sie jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressourcen die Bereiche verlinken. Unterlassen Sie dies, wird es für Benutzer von assistiven Technologien schwierig, eine Bildkarte zu verwenden — sie benötigen Alternativtext, um den Zweck eines Bildes zu verstehen.

### Beispiele

Das folgende Beispiel zeigt eine Bildkarte (entnommen aus [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

```html
<img
  src="welcome.gif"
  usemap="#map1"
  alt="Areas in the library. Select an area for
more information on that area." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30" href="reference.html" alt="Reference" />
  <area
    shape="rect"
    coords="34,34,100,100"
    href="media.html"
    alt="Audio visual lab" />
</map>
```

Siehe die [Referenzseite des `<area>` Elements](/de/docs/Web/HTML/Element/area) für ein interaktives Live-Beispiel.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialogfelder sollten beschriftet werden

Für jeden Container, dessen Inhalt als Dialogfeld fungiert (zum Beispiel ein modales Dialogfeld, das den Benutzer auffordert, eine Auswahl zu treffen oder auf eine Aktion zu reagieren), geben Sie ihm einen beschreibenden Namen oder ein Label, damit Benutzer von assistiven Technologien leicht erkennen können, was dessen Zweck ist.

Ein Dialogfeld wird im Allgemeinen durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) angegeben; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden, um ein Label bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein einfaches Dialogfeld, das als solches mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet ist.

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Labeltext zu enthalten:

```html
<div role="dialog" aria-label="Personal details updated confirmation">
  <p>
    Your personal details were successfully updated. You can change your details
    at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

### Siehe auch

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [WAI-ARIA: Dialog-Rolle](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog-Autoringspraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument ein {{htmlelement("title")}} einzufügen, das den Zweck der Seite beschreibt. Eine übliche Navigationstechnik für Benutzer von unterstützenden Technologien ist, den Inhalt einer Seite zu erfassen, indem sie deren Titel lesen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite navigieren, um deren Inhalt zu bestimmen, was ein zeitaufwändiger und potenziell verwirrender Prozess sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element lautet wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte folgendermaßen aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Benutzer zu helfen, können Sie den Seitentitelwert aktualisieren, um bedeutende Zustandsänderungen der Seite widerzuspiegeln (wie z.B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet werden

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title-Attribut](/de/docs/Web/HTML/Global_attributes/title) haben, das die eingebetteten Inhalte beschreibt. Dazu gehören die Elemente {{htmlelement("embed")}} und {{htmlelement("object")}}. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern von assistiven Technologien zu verstehen, was das Element zeigt.

## Abbildungen mit optionalen Bildunterschriften sollten beschriftet werden

Für beste Zugänglichkeit fügen Sie innerhalb eines {{HTMLElement("figure")}}-Elements ein {{HTMLElement("figcaption")}} hinzu, auch wenn dies technisch optional ist. Die Bildunterschrift ergänzt jeden Alternativtext zu Bildern innerhalb der Abbildung. Die Bildunterschrift beschreibt den Zweck der Abbildung im Dokument, was sich von einer einfachen Beschreibung eines visuellen Elements unterscheiden kann, wie sie vom Alternativtext bereitgestellt wird.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Abbildung mit Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; der {{htmlelement("figcaption")}} beschreibt es aus funktionaler Sicht (in diesem Fall den lateinischen Namen der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet werden

Fieldset-Elemente müssen eine Textbeschreibung haben, ähnlich wie andere Formularelemente. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu beschriften

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element gruppieren, sollten Sie ein verschachteltes {{htmlelement("legend")}}-Element darin einfügen, das eine klare Beschreibung der Gruppe enthält.

Benutzern von assistiven Technologien hilft diese Beschreibung, den Gesamtzweck der Gruppe zu erkennen. Ohne die Legende müssten sie die einzelnen Formularelemente in der Gruppe durchgehen, um den Gesamtzweck zu erschließen, was zu Verwirrung führen könnte.

### Beispiele

```html
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Sie können eine Live-Interaktive-Version dieses Beispiels auf der [`<fieldset>`-Referenzseite](/de/docs/Web/HTML/Element/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet werden

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das seinen Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Artikeln sowie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elementen sowie für jedes Element mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}}-Elements platziert werden, in welchem Fall die Verbindung zwischen dem Formularelement und dem Label aus der Struktur offensichtlich ist. Oder Sie können eine Verbindung zwischen einem {{htmlelement("label")}} und einem Formularelement herstellen, indem Sie das `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">Yes, please send me news about this product.</label>
```

## Formularelemente sollten ein sichtbares Textlabel haben

Zusätzlich zur Bereitstellung eines {{htmlelement("label")}} für jedes Formularelement sollten diese Labels sichtbar, nicht versteckt, sein. Sichtbare Labels helfen _allen_ Benutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertexte, da diese verschwinden, sobald der Benutzer mit der Eingabe beginnt.

## Frame-Elemente müssen beschriftet werden

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, der den Inhalt des Frames beschreibt. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu beschriften. Ohne einen Titel müssen Benutzer von assistiven Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element gehört nicht mehr zur HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern eingestellt werden. Außerdem ist es für Screenreader schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartung sollten alle Seiten, die Frames verwenden, in CSS umgestaltet werden, um ein ähnliches Layout zu erreichen.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das Dokument bereitstellen, das im Frame enthalten ist, mit einem Inhalt, der dem `title`-Attribut des Frames entspricht. (Dies setzt voraus, dass das enthaltene Dokument unter Ihrer Kontrolle ist; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des im Dokument enthaltenen {{htmlelement("title")}}. Es ist am sichersten und am zugänglichsten, denselben Titel an beiden Stellen bereitzustellen.

### Beispiel

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Überschriften müssen beschriftet werden

Stellen Sie sicher, dass Ihre Überschriften nicht leer sind und nicht versteckt werden, z.B. durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Benutzer von Screenreadern „überfliegen“ typischerweise die Überschriften einer Seite, ähnlich wie sehende Benutzer; nicht-überschriftenmäßiger Text, der mit Überschriftselementen markiert ist, kann zu Verwirrung führen.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht leer sind und nicht versteckt werden, z.B. durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte zu markieren.

## Verwenden Sie das title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne einen Titel müssen Benutzer von assistiven Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das Dokument bereitstellen, das im Frame enthalten ist, mit einem Inhalt, der dem `title`-Attribut des Frames entspricht. (Dies setzt voraus, dass das enthaltene Dokument unter Ihrer Kontrolle ist; falls nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des im Dokument enthaltenen {{htmlelement("title")}}. Es ist am sichersten und am zugänglichsten, denselben Titel an beiden Stellen bereitzustellen.

## Inhalte mit Bildern müssen beschriftet werden

Stellen Sie für alle inhaltsreichen (das heißt nicht dekorativen) Bilder und bildähnliche Elemente beschreibenden Text bereit. Dazu gehören SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen der `type` mit `image/` beginnt. Der typische Weg, dies zu tun, ist mit dem `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element dazu gedacht ist, dass Benutzer damit interagieren, sollte es ein Label haben. Zu den interaktiven Elementen gehören Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art und Weise, wie ein Element beschriftet wird, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet normalerweise der Textinhalt des Elements das Label. Wenn keine andere Option zur Beschriftung eines Elements besteht, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut.

## Verwenden Sie das label-Attribut bei optgroup-Elementen

Verwenden Sie in einem {{htmlelement("optgroup")}}-Element das `label`-Attribut, um die Gruppe zu beschreiben, damit unterstützende Technologien darauf für ihre Benutzer zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut innerhalb der {{HTMLElement('optgroup')}}-Elemente einen Kategorienamen für die Optionsgruppe an.

```html
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

## Symbolleisten müssen beschriftet werden, wenn es mehr als eine Symbolleiste gibt

Wenn Sie in einer Webanwendung mehr als eine Symbolleiste mit der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut verwenden, um jede zu beschriften, damit sie von unterstützenden Technologien beschrieben werden können. Es ist eine gute Praxis, eine Symbolleiste zu beschriften, auch wenn es nur eine pro Seite gibt.

### Siehe auch

- [W3C ARIA Toolbar-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die denselben Zweck erfüllt, außer in den oben aufgeführten Situationen.
- [2.4.4 Link-Zweck (Im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann aus dem Linktext allein oder aus dem Linktext zusammen mit seinem programmatisch bestimmten Linkkontext ermittelt werden, es sei denn, der Zweck des Links wäre allgemein für Benutzer uneindeutig.
- [2.4.9 Link-Zweck (Nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Es ist ein Mechanismus verfügbar, um den Zweck jedes Links allein aus dem Linktext bestimmen zu können, es sei denn, der Zweck des Links wäre allgemein für Benutzer uneindeutig.

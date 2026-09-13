---
title: Textbeschriftungen und Namen
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Es gibt viele Situationen, in denen ein Steuerelement, ein Dialogfeld oder ein anderes Website-Feature einen beschreibenden Namen oder ein Label erhalten sollte, um Nutzern von unterstützenden Technologien zu ermöglichen, den Zweck zu verstehen und es korrekt zu bedienen. Es gibt in dieser Kategorie verschiedene Arten von Problemen, die in unterschiedlichen Kontexten auftreten, und jedes hat seine eigene Lösung. Die unterschiedlichen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das alt-Attribut, um Bereichselemente mit dem href-Attribut zu beschriften

In Bildkarten geben Sie jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressourcen die Bereiche verlinken. Wenn dies nicht getan wird, wird eine Bildkarte für Nutzer von unterstützenden Technologien schwer nutzbar—sie benötigen Alternativtext, um den Zweck eines Bildes verstehen zu können.

### Beispiele

Das folgende Beispiel zeigt eine Bildkarte (entnommen aus [H24: Bereitstellung von Textalternativen für die area-Elemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

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

Siehe die [`<area>`-Element-Referenzseite](/de/docs/Web/HTML/Reference/Elements/area) für ein live-interaktives Beispiel.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die area-Elemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet sein

Für jeden Container, dessen Inhalt als Dialogfeld fungiert (zum Beispiel ein modaler Dialog, der den Benutzer auffordert, eine Wahl zu treffen oder auf eine Aktion zu reagieren), geben Sie ihm ein beschreibendes Label oder einen Namen, damit Nutzer von unterstützenden Technologien leicht herausfinden können, was sein Zweck ist.

Ein Dialogfeld wird in der Regel durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) bezeichnet; Sie können die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribute verwenden, um ein Label bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein Dialogfeld, das als solches mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet ist.

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
- [Dialog-Autorenpraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument einen {{htmlelement("title")}} einzufügen, der den Zweck der Seite beschreibt. Eine gängige Navigationstechnik für Nutzer von unterstützenden Technologien ist es, zu ermitteln, welchen Inhalt eine Seite enthält, indem sie ihren Titel lesen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite durchblättern, um ihren Inhalt zu bestimmen, was ein zeitaufwendiger und potenziell verwirrender Prozess sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element lautet wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte so aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Nutzer zu helfen, können Sie den Seitentitelwert so aktualisieren, dass er wesentliche Zustandsänderungen der Seite widerspiegelt (wie z. B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet sein

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut haben, das die eingebetteten Inhalte beschreibt. Dazu gehören die {{htmlelement("embed")}} und {{htmlelement("object")}}-Elemente. Diese Elemente werden häufig für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Nutzern von unterstützenden Technologien zu verstehen, was das Element zeigt.

## Abbildungen mit optionalen Beschriftungen sollten beschriftet sein

Für beste Zugänglichkeit fügen Sie eine {{HTMLElement("figcaption")}} in ein {{HTMLElement("figure")}}-Element ein, auch wenn dies technisch optional ist. Die Beschriftung erfolgt zusätzlich zu jedem Alternativtext auf Bildern innerhalb der Abbildung. Die Beschriftung beschreibt den Zweck der Abbildung im Dokument, der sich von einer Beschreibung eines visuellen Elements unterscheiden kann, wie sie vom Alternativtext bereitgestellt wird.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Abbildung mit einer Beschriftung. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; die {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet sein

Fieldset-Elemente müssen eine Textbeschreibung haben, ähnlich wie andere Formularelemente. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu beschriften

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element gruppieren, sollten Sie ein verschachteltes {{htmlelement("legend")}}-Element darin einfügen, das eine klare Beschreibung der Gruppe enthält.

Nutzer von unterstützenden Technologien finden diese Beschreibung hilfreich, wenn sie versuchen, den allgemeinen Zweck der Gruppe zu verstehen. Ohne die Legende müssten sie um die einzelnen Formularsteuerelemente in der Gruppe navigieren, um eine Vorstellung vom Gesamtsinn zu bekommen, was zu Verwirrung führen könnte.

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

Sie können eine live-interaktive Version dieses Beispiels auf der [`<fieldset>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet sein

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das ihren Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie für {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente, ebenso wie für jedes Element mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, in welchem Fall die Zuordnung zwischen dem Formularelement und dem Label aus der Struktur offensichtlich ist. Oder Sie können eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement schaffen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributes des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">Yes, please send me news about this product.</label>
```

## Formularelemente sollten eine sichtbare Textbeschriftung haben

Zusätzlich zu einem {{htmlelement("label")}} für jedes Formularelement sollten diese Beschriftungen sichtbar und nicht versteckt sein. Sichtbare Beschriftungen helfen _allen_ Nutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Placeholder-Text, da dieser verschwindet, sobald der Benutzer zu tippen beginnt.

## Rahmenelemente müssen beschriftet sein

Rahmenelemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, der den Inhalt des Rahmens beschreibt. Verwenden Sie das `title`-Attribut, um ein Rahmenelement zu beschriften. Ohne einen Titel müssen Nutzer von unterstützenden Technologien in den Rahmen navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern eingestellt werden. Zusätzlich ist es für Bildschirmlesegeräte schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartung gestalten Sie alle Seiten, die Frames verwenden, um, um ein ähnliches Layout mit CSS zu erreichen.

Als bewährte Praxis geben Sie auch ein {{htmlelement("title")}} für das Dokument an, das im Frame enthalten ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das enthaltene Dokument unter Ihrer Kontrolle steht; andernfalls versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Bildschirmlesegeräte ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des enthaltenen Dokuments. Es ist am sichersten und zugänglichsten, denselben Titel an beiden Orten bereitzustellen.

### Beispiel

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Überschriften müssen beschriftet sein

Stellen Sie sicher, dass Ihre Überschriften nichtleeren Textinhalt haben und nicht versteckt sind, beispielsweise mit CSS `display:none` oder `aria-hidden=true`. Nutzer von Bildschirmlesegeräten sind auf Überschriften angewiesen, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Nutzer von Bildschirmlesegeräten "überfliegen" normalerweise die Überschriften einer Seite, ähnlich wie sehende Nutzer; nicht-überschriftlicher Text, der mit Überschriftselementen versehen ist, kann Verwirrung stiften.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nichtleeren Textinhalt haben und nicht versteckt sind, beispielsweise mit CSS `display:none` oder `aria-hidden=true`. Nutzer von Bildschirmlesegeräten sind auf Überschriften angewiesen, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte zu markieren.

## Verwenden Sie das title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, das den Inhalt des Rahmens beschreibt. Ohne einen Titel müssen Nutzer von unterstützenden Technologien in den Rahmen navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als bewährte Praxis geben Sie auch ein {{htmlelement("title")}} für das Dokument an, das im Frame enthalten ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das enthaltene Dokument unter Ihrer Kontrolle steht; andernfalls versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Bildschirmlesegeräte ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des enthaltenen Dokuments. Es ist am sichersten und zugänglichsten, denselben Titel an beiden Orten bereitzustellen.

## Inhalte mit Bildern müssen beschriftet sein

Stellen Sie beschreibenden Text für alle inhaltsvollen (d.h. nicht dekorativen) Bilder und bildähnlichen Elemente bereit. Dies umfasst SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}}, und {{htmlelement("area")}}-Elemente, sowie {{htmlelement("input")}}-Elemente, wenn `type=image` und {{htmlelement("object")}}-Elemente, bei denen der `type` mit `image/` beginnt. Die übliche Methode, dies zu tun, ist das `alt`-Attribut, aber für Elemente, die das `alt`-Attribut nicht zulassen, wie {{htmlelement("canvas")}}, verwenden Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

Für `alt`-Attribute bei Bildern, die _ausschließlich dekorativ_ sind, kann ein leerer Wert verwendet werden, um den unterstützenden Tools zu signalisieren, dass das Element ignoriert werden soll.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet sein

Wenn ein Element dazu gedacht ist, dass Nutzer damit interagieren, sollte es ein Label haben. Interaktive Elemente umfassen Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art und Weise, wie ein Element beschriftet wird, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet der Textinhalt des Elements typischerweise das Label. Wenn keine andere Option zur Beschriftung eines Elements existiert, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.

## Verwenden Sie das label-Attribut bei optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe zu beschreiben, damit unterstützende Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut an den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe von Optionen an.

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

## Symbolleisten müssen beschriftet sein, wenn es mehr als eine gibt

Wenn Sie mehr als eine Symbolleiste in einer Webanwendung mit der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwenden, um jede zu beschriften, sodass sie von unterstützender Technologie beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu beschriften, auch wenn es nur eine pro Seite gibt.

### Siehe auch

- [W3C ARIA toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://w3c.github.io/wcag/guidelines/22/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die denselben Zweck erfüllt, außer in den oben verlinkten Situationen.
- [2.4.4 Linkzweck (im Kontext) (A)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext zusammen mit dem programmatisch bestimmten Linkkontext ermittelt werden, es sei denn, der Zweck des Links wäre im Allgemeinen für die Benutzer zweideutig.
- [2.4.9 Linkzweck (Link Only) (AAA)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-link-only)
  - : Es steht ein Mechanismus zur Verfügung, der es ermöglicht, den Zweck jedes Links allein aus dem Linktext zu identifizieren, es sei denn, der Zweck des Links wäre im Allgemeinen für die Benutzer zweideutig.

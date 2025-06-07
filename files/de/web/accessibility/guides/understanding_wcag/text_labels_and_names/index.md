---
title: Textbeschriftungen und Namen
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Es gibt viele Situationen, in denen ein Steuerungselement, ein Dialog oder eine andere Website-Funktion einen beschreibenden Namen oder ein Label erhalten sollte, damit Nutzer von unterstützenden Technologien verstehen, was deren Zweck ist und wie sie korrekt bedient werden. In dieser Kategorie gibt es verschiedene Arten von Problemen, die in unterschiedlichen Kontexten auftreten, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das `alt`-Attribut, um Bereichelemente mit dem `href`-Attribut zu beschriften

Geben Sie in Bildkarten jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, zu welchen Ressourcen die Bereiche verlinken. Ohne dies wird eine Bildkarte für Nutzer von unterstützenden Technologien schwer nutzbar - sie benötigen Alternativtext, um den Zweck eines Bildes zu verstehen.

### Beispiele

Das folgende Beispiel zeigt eine Bildkarte (entnommen aus [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

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

Siehe die [`<area>`-Element-Referenzseite](/de/docs/Web/HTML/Reference/Elements/area) für ein interaktives Live-Beispiel.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet werden

Geben Sie jedem Container, dessen Inhalte als Dialogfeld fungieren (zum Beispiel ein modales Dialogfeld, das den Nutzer bittet, eine Auswahl zu treffen oder auf eine Aktion zu reagieren), ein beschreibendes Label oder einen Namen, damit Nutzer von unterstützenden Technologien leicht entdecken können, wozu es dient.

Ein Dialogfeld wird im Allgemeinen durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden, um ein Label bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein Dialogfeld, definiert mit `role="dialog"` und mit `aria-labelledby` beschriftet.

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

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Labeltext anzugeben:

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
- [Dialog authoring practices](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument ein {{htmlelement("title")}} zu inkludieren, das den Zweck der Seite beschreibt. Eine gängige Navigationstechnik für Nutzer von unterstützenden Technologien besteht darin, anhand des Titels zu ermitteln, welche Inhalte eine Seite enthält. Wenn der Titel nicht verfügbar ist, müssen sie die Seite durchblättern, um den Inhalt zu bestimmen, was ein zeitaufwändiger und potenziell verwirrender Prozess sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element ist wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein anderes Beispiel könnte so aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Nutzer zu helfen, können Sie den Wert des Seitentitels aktualisieren, um signifikante Änderungen des Seitenzustands wiederzugeben (wie z.B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet werden

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut haben, das die eingebetteten Inhalte beschreibt. Dies schließt die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente ein. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Nutzern von unterstützenden Technologien, zu verstehen, was das Element zeigt.

## Figuren mit optionalen Bildunterschriften sollten beschriftet werden

Für eine bestmögliche Zugänglichkeit schließen Sie ein {{HTMLElement("figcaption")}} innerhalb eines {{HTMLElement("figure")}}-Elements ein, auch wenn dies technisch optional ist. Die Bildunterschrift ergänzt jeden Alternativtext bei Bildern innerhalb der Figur. Die Bildunterschrift beschreibt den Zweck der Figur im Dokument, der sich von einer Beschreibung eines visuellen Elements unterscheiden kann, wie es der Alternativtext bietet.

### Beispiel

Das folgende Beispiel zeigt Code für eine Figur mit Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Erscheinungsbild des Bildes; das {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet werden

Fieldset-Elemente müssen ähnlich wie andere Formularelemente eine Textbeschreibung haben. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu beschriften

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element zusammenfassen, sollten Sie ein geschachteltes {{htmlelement("legend")}}-Element darin einschließen, das eine klare Beschreibung der Gruppe enthält.

Nutzer von unterstützenden Technologien finden diese Beschreibung hilfreich, wenn sie versuchen, den Gesamtsinn der Gruppe zu verstehen. Ohne die Legende müssten sie um die einzelnen Formularsteuerelemente in der Gruppe navigieren, um eine Vorstellung vom Gesamtsinn zu bekommen, was zu Verwirrung führen könnte.

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

Sie können eine Live-Version dieses Beispiels auf der [`<fieldset>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet werden

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das ihren Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie für {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente sowie für jedes Element mit der [`switch` ARIA Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, wobei die Verbindung zwischen dem Formularelement und dem Label aus der Struktur ersichtlich ist. Alternativ können Sie eine Verbindung zwischen einem {{htmlelement("label")}} und einem Formularelement herstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">Yes, please send me news about this product.</label>
```

## Formularelemente sollten sichtbare Textbeschriftungen haben

Zusätzlich zur Verwendung eines {{htmlelement("label")}} für jedes Formularelement sollten diese Labels sichtbar, nicht versteckt, sein. Sichtbare Labels helfen _allen_ Nutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Nutzer mit der Eingabe beginnt.

## Rahmen-Elemente müssen beschriftet werden

Rahmen-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, der den Inhalt des Rahmens beschreibt. Verwenden Sie das `title`-Attribut, um ein Rahmen-Element zu beschriften. Ohne einen Titel müssen Nutzer von unterstützenden Technologien den Rahmen betreten, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung hierfür könnte von Browsern in Zukunft entfernt werden. Außerdem ist es für Bildschirmlesegeräte schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartbarkeit sollten Sie alle Seiten, die Frames verwenden, so umgestalten, dass CSS für ein ähnliches Layout verwendet wird.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das im Rahmen eingeschlossene Dokument bereitstellen, dessen Inhalt mit dem `title`-Attribut des Rahmens identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Rahmens mit dem Titel des Dokuments abzustimmen.) Einige Bildschirmlesegeräte ersetzen den Inhalt des `title`-Attributs durch den Inhalt des beiliegenden {{htmlelement("title")}}. Es ist am sichersten und zugänglichsten, den gleichen Titel an beiden Stellen bereitzustellen.

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

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, etwa durch CSS `display:none` oder `aria-hidden=true`. Nutzer von Bildschirmlesegeräten verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) nur für echte Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Nutzer von Bildschirmlesegeräten "überfliegen" in der Regel die Überschriften einer Seite, ähnlich wie sehende Nutzer; nicht-Überschriftstext, der mit Überschriftselementen ausgezeichnet ist, kann Verwirrung stiften.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, etwa durch CSS `display:none` oder `aria-hidden=true`. Nutzer von Bildschirmlesegeräten verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte auszuzeichnen.

## Verwenden Sie das `title`-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Rahmens zu beschreiben. Ohne einen Titel müssen Nutzer von unterstützenden Technologien den Rahmen betreten, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das im Rahmen eingeschlossene Dokument bereitstellen, dessen Inhalt mit dem `title`-Attribut des Rahmens identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Rahmens mit dem Titel des Dokuments abzustimmen.) Einige Bildschirmlesegeräte ersetzen den Inhalt des `title`-Attributs durch den Inhalt des beiliegenden {{htmlelement("title")}}. Es ist am sichersten und zugänglichsten, den gleichen Titel an beiden Stellen bereitzustellen.

## Inhalte mit Bildern müssen beschriftet werden

Stellen Sie beschreibenden Text für alle inhaltsreichen (d.h. nicht dekorativen) Bilder und bildähnlichen Elemente bereit. Dazu gehören SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen der `type` mit `image/` beginnt. Der übliche Weg, dies zu tun, ist mit dem `alt`-Attribut. Achten Sie darauf, dass die Beschreibung vermittelt, was auf dem Bild zu sehen ist.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element für Nutzer zur Interaktion gedacht ist, sollte es ein Label haben. Zu den interaktiven Elementen gehören Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das über einen Maus- oder Tastatur-Handler verfügt. Die Art, ein Element zu beschriften, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet der Textinhalt des Elements typischerweise das Label. Wenn keine andere Option existiert, um ein Element zu beschriften, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.

## Verwenden Sie das Label-Attribut bei optgroup-Elementen

Verwenden Sie im {{htmlelement("optgroup")}}-Element das `label`-Attribut, um die Gruppe zu beschreiben, damit unterstützende Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut der {{HTMLElement('optgroup')}}-Elemente einen Kategorienamen für die Gruppe von Optionen an.

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

## Werkzeugleisten müssen beschriftet werden, wenn es mehr als eine Werkzeugleiste gibt

Wenn Sie mehr als eine Werkzeugleiste in einer Webanwendung unter Verwendung der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwenden, um jede zu beschriften, sodass sie von unterstützenden Technologien beschrieben werden kann. Es ist eine gute Praxis, eine Werkzeugleiste auch dann zu beschriften, wenn es pro Seite nur eine gibt.

### Siehe auch

- [W3C ARIA toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://w3c.github.io/wcag/guidelines/22/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Nutzer präsentiert werden, haben eine Textalternative, die denselben Zweck erfüllt, außer in den im obigen Link aufgeführten Situationen.
- [2.4.4 Link-Zweck (Im Kontext) (A)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext zusammen mit seinem programmgesteuert ermittelten Linkkontext bestimmt werden, außer wenn der Zweck des Links allgemein für die Nutzer unklar wäre.
- [2.4.9 Link-Zweck (Nur Link) (AAA)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-link-only)
  - : Ein Mechanismus ist verfügbar, um den Zweck jedes Links allein aus dem Linktext erkennbar zu machen, außer wenn der Zweck des Links allgemein für die Nutzer unklar wäre.

---
title: Textetiketten und -namen
slug: Web/Accessibility/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Es gibt viele Situationen, in denen einer Steuerung, einem Dialog oder einer anderen Website-Funktion ein beschreibender Name oder ein Label gegeben werden sollte, um Nutzern von Hilfstechnologien zu ermöglichen, deren Zweck zu verstehen und sie korrekt zu bedienen. Es gibt eine Reihe verschiedener Arten von Problemen in dieser Kategorie, die in verschiedenen Kontexten auftreten, und jedes hat seine eigene Lösung. Die unterschiedlichen Probleme und Lösungen werden in den folgenden Abschnitten erläutert.

## Verwenden Sie das alt-Attribut, um Bereichselemente zu kennzeichnen, die das href-Attribut haben

In Bildkarten geben Sie jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressourcen die Bereiche verlinken. Wenn Sie dies versäumen, wird die Nutzung einer Bildkarte für Benutzer von Hilfstechnologien erschwert — sie benötigen Alternativtext, um den Zweck eines Bildes zu verstehen.

### Beispiele

Das folgende Beispiel zeigt eine einfache Bildkarte (entnommen aus [H24: Bereitstellung von Textalternativen für die area-Elemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

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

Siehe die [`<area>` Elementreferenzseite](/de/docs/Web/HTML/Element/area) für ein interaktives Live-Beispiel.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet werden

Für jeden Container, dessen Inhalt als Dialogfeld wirkt (z. B. ein modaler Dialog, der den Benutzer auffordert, eine Auswahl zu treffen oder auf eine durchgeführte Aktion zu reagieren), geben Sie ihm ein beschreibendes Label oder einen Namen, damit Benutzer von Hilfstechnologien leicht erkennen können, was sein Zweck ist.

Ein Dialogfeld wird im Allgemeinen durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, um ein Label bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein einfaches Dialogfeld, das mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet wird.

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

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [WAI-ARIA: Dialogrolle](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument ein {{htmlelement("title")}} einzuschließen, das den Zweck der Seite beschreibt. Eine übliche Navigationstechnik für Benutzer von Hilfstechnologien besteht darin, den Inhalt einer Seite anhand ihres Titels zu ermitteln. Wenn der Titel nicht verfügbar ist, müssen sie die Seite durchsuchen, um den Inhalt zu bestimmen, was zeitaufwendig und potenziell verwirrend sein kann.

### Beispiele

Der Titel des Referenzartikels über das {{htmlelement("title")}}-Element sieht folgendermaßen aus:

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

Um dem Benutzer zu helfen, können Sie den Seitentitelwert so aktualisieren, dass er wichtige Zustandsänderungen der Seite widerspiegelt (wie z. B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet werden

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Global_attributes/title)-Attribut haben, das den eingebetteten Inhalt beschreibt. Dazu gehören die Elemente {{htmlelement("embed")}} und {{htmlelement("object")}}. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich wie das {{htmlelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern von Hilfstechnologien, zu verstehen, was das Element anzeigt.

## Figuren mit optionalen Bildunterschriften sollten beschriftet werden

Für beste Zugänglichkeit sollten Sie ein {{htmlelement("figcaption")}} innerhalb eines {{htmlelement("figure")}}-Elements einfügen, auch wenn dies technisch optional ist. Die Bildunterschrift ergänzt jeden Alternativtext auf Bildern innerhalb der Figur. Die Bildunterschrift beschreibt den Zweck der Figur im Dokument, der sich von einer einfachen Beschreibung eines visuellen Elements, wie sie der Alternativtext bietet, unterscheiden kann.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Figur mit Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; das {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet werden

Fieldset-Elemente müssen eine Textbeschreibung haben, ähnlich wie andere Formularelemente. Verwenden Sie das {{htmlelement("legend")}}, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu kennzeichnen

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element zusammenfassen, sollten Sie ein verschachteltes {{htmlelement("legend")}}-Element darin einschließen, das eine klare Beschreibung der Gruppe enthält.

Benutzer von Hilfstechnologien finden diese Beschreibung hilfreich, wenn sie versuchen, den allgemeinen Zweck der Gruppe zu ermitteln. Ohne die Legende müssten sie sich um die einzelnen Formularsteuerelemente in der Gruppe navigieren, um eine Vorstellung vom allgemeinen Zweck zu bekommen, was zu Verwirrung führen könnte.

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

Sie können eine Live-, interaktive Version dieses Beispiels auf der [`<fieldset>`-Referenzseite](/de/docs/Web/HTML/Element/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet werden

Alle Elemente innerhalb eines Formulars müssen einen {{htmlelement("label")}} haben, der ihren Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen, sowie für {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente, sowie für jedes Element mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role).

Das Formularelement kann innerhalb von {{htmlelement("label")}} platziert werden, in diesem Fall ist die Verbindung zwischen dem Formularelement und dem Label aus der Struktur offensichtlich. Oder, Sie können eine Verbindung zwischen einem {{htmlelement("label")}} und einem Formularelement herstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">Yes, please send me news about this product.</label>
```

## Formularelemente sollten ein sichtbares Textetikett haben

Zusätzlich dazu, dass ein {{htmlelement("label")}} für jedes Formularelement vorhanden ist, sollten diese Labels sichtbar, nicht versteckt sein. Sichtbare Labels helfen _alle_ Benutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer mit der Eingabe beginnt.

## Frame-Elemente müssen beschriftet werden

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, der den Inhalt des Frames beschreibt. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu kennzeichnen. Ohne Titel müssen Benutzer von Hilfstechnologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{htmlelement("frame")}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern entfernt werden. Zudem ist es für Screenreader schwierig, Seiten mit {{htmlelement("frame")}}-Elementen zu durchforsten. Für beste Zugänglichkeit und zukünftige Wartbarkeit sollten alle Seiten, die Frames verwenden, umgestaltet werden, um mit CSS ein ähnliches Layout zu erreichen.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das im Frame eingeschlossene Dokument bereitstellen, wobei der Inhalt mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; wenn nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des eingeschlossenen Dokuments. Es ist am sichersten und zugänglichsten, in beiden Fällen den gleichen Titel bereitzustellen.

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

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, z. B. durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Screenreader-Benutzer „überfliegen“ typischerweise die Überschriften einer Seite, ähnlich wie sehende Benutzer; nicht-Überschriftstext, der mit Überschriftselementen ausgezeichnet ist, kann zu Verwirrung führen.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, z. B. durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte auszuzeichnen.

## Verwenden Sie das title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne einen Titel müssen Benutzer von Hilfstechnologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das im Frame eingeschlossene Dokument bereitstellen, wobei der Inhalt mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; wenn nicht, versuchen Sie, das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des {{htmlelement("title")}} des eingeschlossenen Dokuments. Es ist am sichersten und zugänglichsten, in beiden Fällen den gleichen Titel bereitzustellen.

## Inhalte mit Bildern müssen beschriftet werden

Stellen Sie für alle gehaltvollen (d. h. nicht-dekorativen) Bilder und bildähnlichen Elemente beschreibenden Text bereit. Dies umfasst SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}}, und {{htmlelement("area")}}-Elemente sowie {{htmlelement("input")}}-Elemente, bei denen `type=`image``und {{htmlelement("object")}}-Elemente`type`mit`image/`beginnen. Der typische Weg, dies zu tun, ist mit dem`alt`-Attribut. Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element zur Interaktion vorgesehen ist, sollte es ein Label haben. Zu den interaktiven Elementen gehören Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Listener für Maus- oder Tastaturereignisse hat. Die Art und Weise, ein Element zu kennzeichnen, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet der Textinhalt des Elements typischerweise das Label. Wenn keine andere Option zur Kennzeichnung eines Elements vorhanden ist, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.

## Verwenden Sie den label-Attribut auf optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe zu beschreiben, sodass Hilfstechnologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut auf den {{htmlelement("optgroup")}}-Elementen einen Kategorienamen für die Gruppe von Optionen an.

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

Wenn Sie mehr als eine Symbolleiste in einer Webanwendung mithilfe der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwenden, um jede einzelne zu kennzeichnen, damit sie von Hilfstechnologien beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu kennzeichnen, auch wenn sich nur eine pro Seite befindet.

### Siehe auch

- [W3C ARIA Symbolleisten-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die den gleichwertigen Zweck erfüllt, außer in den oben aufgeführten Situationen.
- [2.4.4 Link-Zweck (Im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann aus dem Linktext allein oder aus dem Linktext zusammen mit seinem programmatisch bestimmten Linkkontext bestimmt werden, außer wenn der Zweck des Links allgemein nicht eindeutig wäre.
- [2.4.9 Link-Zweck (Nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Es ist ein Mechanismus verfügbar, der es ermöglicht, den Zweck jedes Links allein anhand des Linktexts zu identifizieren, es sei denn, der Zweck des Links wäre allgemein nicht eindeutig.

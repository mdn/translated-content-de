---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`image`** werden verwendet, um grafische Schaltflächen zum Senden zu erstellen, d.h. Schaltflächen, die in Form eines Bildes anstelle von Text dargestellt werden.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingaben vom Typ `image` die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenkette als Beschriftung der Schaltfläche, falls das Bild nicht angezeigt werden kann (wegen eines Fehlers, eines [User-Agent](/de/docs/Glossary/user_agent), der Bilder nicht anzeigen kann oder so konfiguriert ist, dass keine Bilder angezeigt werden, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Wenn angegeben, muss es eine nicht leere Zeichenkette sein, die als Beschriftung für die Schaltfläche geeignet ist.

Beispielsweise sollten Sie das `alt`-Attribut auf etwas wie `Login Now` setzen, wenn Sie eine grafische Schaltfläche haben, die ein Bild mit einem Symbol und/oder einer Bildbeschriftung "Login Now" zeigt.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie es immer angeben, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Codierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dieser Standardwert sendet die Formulardaten als String nach [Prozent-Codierung](/de/docs/Glossary/Percent-encoding) des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht das Senden von Dateien an den Server. Sie _müssen_ diesen Codierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente des Typs [`file`](/de/docs/Web/HTML/Element/input#type) ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nur für Debugging nützlich, sodass Sie die Daten, die gesendet werden sollen, leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt alle auf dem Formular angegebenen [`method`](/de/docs/Web/HTML/Element/form#method)-Attribute. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wird, begonnen wird und nach Anhängen eines Fragezeichens ("?") die Formulardaten angehängt werden, wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars beschrieben. Diese URL wird dann mit einem HTTP {{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur [ASCII](/de/docs/Glossary/ASCII)-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Hauptteil der Anfrage aufgenommen, die an die im `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebene URL gesendet wird, wobei ein HTTP {{HTTPMethod("post")}}-Anfrage verwendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass die Schaltfläche den Dialog schließt, mit dem das Eingabefeld verbunden ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolesches Attribut, das, falls vorhanden, angibt, dass das Formular nicht validiert werden sollte, bevor es an den Server gesendet wird. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs auf dem besitzenden Formular des Elements.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das darauf hinweist, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** sein (das heißt, ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut auf dem {{HTMLElement("form")}}, das dieses Eingabefeld besitzt, gegeben ist.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder eingebetteten Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie der, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann sich jedoch je nach Konfiguration des [User-Agent](/de/docs/Glossary/user_agent) unterscheiden.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Browsing-Kontextes. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die verwendet werden soll, um die grafische Senden-Schaltfläche darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltflächen-Eingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde in HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und wurde inzwischen als veraltet angesehen.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkartenelements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten zum Verwenden des {{HTMLElement("img")}}-Elements wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwenden von Bild-Eingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht von der CSS-Schicht erzeugt oder direkt verwaltet wird), das sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element verhält, jedoch mit den Fähigkeiten einer [Senden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Funktionen von Bild-Eingaben

Schauen wir uns ein einfaches Beispiel an, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau wie auf dem `<img>`-Element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das in der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alt-Text für das Bild, damit Benutzer eines Bildschirmlesegeräts ein besseres Verständnis dafür bekommen, für was die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der der Beschriftung entspricht, die Sie verwenden würden, wenn Sie eine normale Senden-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche hat die gleiche Größe wie das Bild; wenn Sie möchten, dass der Trefferbereich der Schaltfläche größer ist als das Bild, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Auch wenn Sie nur eine Dimension angeben, wird die andere automatisch eingestellt, sodass das Bild sein ursprüngliches [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehält.

### Überschreiben von Standardformularverhalten

`<input type="image">`-Elemente – wie reguläre [Senden-Schaltflächen](/de/docs/Web/HTML/Element/input/submit) – können eine Reihe von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulareigentümers.
- `formenctype`

  - : Gibt den Typ des Inhalts an, der zum Senden des Formulars an den Server verwendet wird. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben wird, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulareigentümers.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu übermitteln. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular sind im Hauptteil des Formulars enthalten und werden an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribut-URI angehängt und durch ein '?' getrennt. Die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebenwirkungen hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulareigentümers.

- `formnovalidate`
  - : Ein Boolesches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulareigentümers.
- `formtarget`

  - : Ein Name oder Stichwort, das angibt, wo die nach dem Absenden des Formulars erhaltene Antwort angezeigt werden soll. Dies ist der Name oder das Stichwort für einen _Browsing-Kontext_ (z.B. Tab, Fenster oder eingebetteter Rahmen). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulareigentümers. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Laden der Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden der Antwort in einen neuen, nicht benannten Browsing-Kontext.
    - `_parent`: Laden der Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter vorhanden ist, funktioniert diese Option auf dieselbe Weise wie `_self`.
    - `_top`: Laden der Antwort in den obersten Browsing-Kontext (d.h. der Browser-Kontext, der ein Vorfahr des aktuellen ist und keinen Elternteil hat). Wenn kein übergeordneter vorhanden ist, funktioniert diese Option auf dieselbe Weise wie `_self`.

### Verwenden der x- und y-Datenpunkte

Beim Absenden eines Formulars mit einer Schaltfläche, die mit `<input type="image">` erstellt wurde, sendet der Browser automatisch zwei zusätzliche Datenpunkte an den Server – `x` und `y`. Sie können dies in unserem [XY-Koordinatenbeispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu übermitteln, werden Sie sehen, dass die Daten als Parameter an die URL angehängt werden, beispielsweise `?x=52&y=55`. Wenn die Bild-Eingabe ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt ist, sodass die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert würden, wenn der `name` `position` lautet. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf die die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard ist, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, an der das Bild geklickt wurde, von Bedeutung ist; zum Beispiel könnten Sie eine Karte haben, die bei einem Klick die angeklickten Koordinaten an den Server sendet. Der serverseitige Code berechnet dann, auf welchen Standort geklickt wurde und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der herausfindet, welche Farbe basierend auf den übermittelten Koordinaten angeklickt wurde, und eine Statistik zu den Lieblingsfarben erstellt, für die Leute abgestimmt haben.

### Anpassen der Bildposition und des Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild zu erstellen, indem Sie die `width`- und `height`-Attribute verwenden, um Platz im Layout freizuhalten, und dann anzugeben, wo innerhalb dieses Platzes das Bild positioniert wird und wie (oder ob) es skaliert wird, um diesen Platz zu belegen.

## Beispiele

### Ein Login-Formular

Das folgende Beispiel zeigt dieselbe Schaltfläche wie zuvor, jedoch im Kontext eines typischen Login-Formulars.

{{ EmbedLiveSample('A_login_form', 600, 170) }}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Und nun etwas einfaches CSS, um die Grundeingaben ordentlich anzuordnen:

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild bereitzustellen und dann die tatsächliche Größe und Positionierung des Bildes mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} einzustellen.

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}
```

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` eingestellt ist, was angibt, dass das Bild in der größtmöglichen Größe gezeichnet werden soll, die ohne Änderung des Seitenverhältnisses in die Box des Elements passt. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der noch in dem Bereich sichtbar ist, der nicht vom Bild abgedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die es implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes im Rahmen des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

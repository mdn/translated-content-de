---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absende-Buttons zu erstellen, d.h., Absende-Buttons, die in Form eines Bildes anstelle von Text erscheinen.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;image&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Sign in to your account:</p>

<div>
  <label for="userId">User ID</label>
  <input type="text" id="userId" name="userId" />
</div>

<input
  type="image"
  id="image"
  alt="Login"
  src="/shared-assets/images/examples/login-button.png" />
```

```css interactive-example
label {
  font-size: 0.8rem;
}

label,
input[type="image"] {
  margin-top: 1rem;
}

input[type="image"] {
  width: 80px;
}
```

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Elementen gemeinsam genutzten Attributen unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut liefert eine alternative Zeichenkette, die als Bezeichnung für den Button verwendet werden soll, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User-Agent")}}, der keine Bilder anzeigen kann oder so konfiguriert ist, dass er sie nicht anzeigt, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Wenn bereitgestellt, muss es eine nicht-leere Zeichenkette sein, die als Bezeichnung für den Button geeignet ist.

Beispielsweise, wenn Sie einen grafischen Button haben, der ein Bild mit einem Icon und/oder Bildtext "Login Now" anzeigt, sollten Sie das `alt`-Attribut auf etwas wie `Login Now` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines einfügen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktionell arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten gesendet werden sollen. Diese hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut auf dem {{HTMLElement("form")}}-Element, welches das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenkette, die die Kodierungsmethode identifiziert, die beim Absenden der Formular-Daten an den Server verwendet wird. Es sind drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenkette, nachdem der Text mittels einer Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, sodass Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich für das Debugging, damit Sie leicht sehen können, welche Daten gesendet werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des besitzenden Formulars.

Dieses Attribut ist ebenfalls auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Eine Zeichenkette, die die HTTP-Methode angibt, die beim Absenden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des besitzenden Formulars. Erlaubte Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL des `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attributs begonnen wird, ein Fragezeichen ("?") angehängt wird, und dann die Formulardaten angefügt werden, wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars beschrieben. Diese URL wird dann mit einer HTTP {{HTTPMethod("get")}} Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Seiteneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der an die durch `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attributs angegebenen URL zu sendenden Anfrage gesendet, mit einer HTTP {{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass der Button den Dialog schließt, mit dem das Eingabeelement verbunden ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass das Formular vor dem Absenden an den Server nicht überprüft werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Eine Zeichenkette, die einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Die Zeichenkette muss der Name eines **Browsing-Kontextes** sein (das heißt, ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut auf der {{HTMLElement("form")}} angegebenen Ziel des Eingabeelements.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie den, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist in der Regel ein neuer Tab im gleichen Fenster wie das aktuelle Dokument, kann jedoch abhängig von der Konfiguration des {{Glossary("user_agent", "User Agent")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten/dachführenden Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, bei der das durch das `src`-Attribut spezifizierte Bild gezeichnet wird.

### src

Eine Zeichenkette, die die URL der Bilddatei angibt, die als grafischer Absende-Button angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe behandelt.

### width

Eine Zahl, die die Breite angibt, bei der das Bild in CSS-Pixeln gezeichnet wird.

## Veraltete Attribute

Das folgende Attribut wurde durch HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements {{HTMLElement("map")}} sein, das eine Bildkarte zur Verwendung mit dem Bild definiert. Diese Verwendung ist veraltet; Sie sollten zum Verwendung des {{HTMLElement("img")}}-Elements wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Eingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht generiert oder direkt durch die CSS-Ebene verwaltet wird), das sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element verhält, aber mit den Fähigkeiten eines [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Eigenschaften der Bild-Eingabe

Lassen Sie uns ein einfaches Beispiel betrachten, das alle wesentlichen Funktionen beinhaltet, die Sie verwenden müssten (Diese funktionieren genau so wie beim `<img>`-Element.):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alternativtext für das Bild, sodass Benutzer von Bildschirmlesegeräten eine bessere Vorstellung davon bekommen können, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Verwenden Sie nach Möglichkeit einen Text, der dem Label entspricht, das Sie verwenden würden, wenn Sie einen Standardabsende-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild in Pixeln angezeigt werden soll. Der Button hat die gleiche Größe wie das Bild; wenn Sie die Trefferfläche des Buttons größer als das Bild benötigen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Auch wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild seine ursprüngliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Übersteuerung von Standardformular-Verhaltensweisen

`<input type="image">`-Elemente — wie normale [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardformular-Verhalten übersteuern:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabe-Element übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers.
- `formenctype`

  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser beim Absenden des Formulars verwendet. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular werden im Hauptteil des Formulars eingefügt und an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`** Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Seiteneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular beim Absenden nicht überprüft werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies ist der Name oder Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den oberen Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button absenden, der mit `<input type="image">` erstellt wurde, werden vom Browser automatisch zwei zusätzliche Datenpunkte an den Server übermittelt — `x` und `y`. Sie können dies in unserem [X Y Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) sehen.

Wenn Sie auf das Bild klicken, um das Formular abzusenden, werden Sie sehen, dass die Daten als Parameter an die URL angehängt werden, zum Beispiel `?x=52&y=55`. Wenn das Bild-Eingabefeld ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, dann beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird, so dass, wenn der `name` `position` ist, die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert wären. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf die die Maus beim Absenden des Formulars geklickt hat, wobei (0,0) die oben links im Bild ist und der Standard, falls die Einreichung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist, zum Beispiel könnte man eine Karte haben, die beim Anklicken die Koordinaten, auf die geklickt wurde, an den Server sendet. Der Serverseitige Code bestimmt dann, welcher Ort angeklickt wurde und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, auf welche Farbe durch die übermittelten Koordinaten geklickt wurde, und eine Statistik über die beliebtesten Farben erstellt, für die Personen abgestimmt haben.

### Anpassen der Position und des Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmen des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mithilfe der `width`- und `height`-Attribute festzulegen, um Platz im Layout zu reservieren, und dann festzulegen, wo innerhalb dieses Raumes das Bild lokalisiert ist und wie (oder ob) es skaliert wird, um diesen Raum zu füllen.

## Beispiele

### Ein Login-Formular

Das folgende Beispiel zeigt denselben Button wie zuvor, jedoch im Kontext eines typischen Login-Formulars.

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

Und nun etwas CSS, um die Grundelemente sauberer anzuordnen:

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

In diesem Beispiel passen wir das vorherige an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Bildgröße und Positionierung mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} einzustellen.

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

Hier wird `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` eingestellt ist, was angibt, dass das Bild in der größten Größe gezeichnet werden soll, die in den Rahmen des Elements passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbar grauen Hintergrund des Elements, der in dem Bereich sichtbar ist, der nicht vom Bild abgedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Kein Wert — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}

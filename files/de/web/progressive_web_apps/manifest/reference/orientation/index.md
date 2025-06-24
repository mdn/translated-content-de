---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `orientation`-Manifestmitglied wird verwendet, um die Standardausrichtung Ihrer Webanwendung festzulegen. Es definiert, wie die App angezeigt werden soll, wenn sie gestartet wird und während ihrer Nutzung in Bezug auf die Bildschirmorientierung des Geräts, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann zur Laufzeit auf verschiedene Weise geändert werden, z. B. durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

## Syntax

```json-nolint
/* Keyword values */
"orientation": "any"
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
```

### Werte

- `orientation`

  - : Ein String, der die Standardausrichtung für die Web-App angibt. Wenn das `orientation`-Mitglied nicht angegeben oder ein ungültiger Wert angegeben wird, verwendet die Web-App in der Regel die natürliche Ausrichtung des Geräts und alle Nutzer- oder systemseitigen Ausrichtungseinstellungen.

    Der `orientation`-Wert muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Web-App in jeder vom Betriebssystem des Geräts oder den Nutzereinstellungen erlaubten Ausrichtung an. Es erlaubt der App, frei zu rotieren, um die Ausrichtung des Geräts bei einer Drehung zu übernehmen.

    - `natural`

      - : Zeigt die Web-App in der für das Gerät am natürlichsten betrachteten Ausrichtung an, wie sie vom Browser, Betriebssystem, Nutzereinstellungen oder dem Bildschirm selbst bestimmt wird. Diese entspricht der üblichsten Halte- oder Nutzungsmethode des Geräts:

        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` normalerweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal genutzt werden, wie Computermonitore und Tablets, ist `natural` normalerweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann es sein, dass die App rotiert oder nicht rotiert, um die natürliche Ausrichtung des Geräts zu übernehmen; dieses Verhalten kann je nach spezifischem Gerät, Browser-Implementierung und Nutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Web-App mit größerer Höhe als Breite an. Es erlaubt der App, zwischen den Ausrichtungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Web-App im Hochformat an, typischerweise mit dem Gerät aufrecht gehalten. Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus im Hochformat sind. Je nach Gerät und Browser-Implementierung wird die App normalerweise diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Web-App im umgekehrten Hochformat an, was 180 Grad zu `portrait-primary` gedreht ist. Je nach Gerät und Browser-Implementierung wird die App normalerweise diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Web-App mit größerer Breite als Höhe an. Es erlaubt der App, zwischen den Ausrichtungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Web-App im Querformat an, typischerweise mit dem Gerät in seiner standardmäßigen horizontalen Position. Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus im Querformat sind. Je nach Gerät und Browser-Implementierung wird die App normalerweise diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape-secondary`
      - : Zeigt die Web-App im umgekehrten Querformat an, was 180 Grad zu `landscape-primary` gedreht ist. Je nach Gerät und Browser-Implementierung wird die App normalerweise diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifestmitglied zu verstehen, ist es wichtig, sich mit den folgenden konzeptbezogenen Begriffen zur Orientierung vertraut zu machen:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmorientierung**: Definiert die physische Ausrichtung des Gerätsbildschirms.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App relativ zur Bildschirmorientierung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert sich normalerweise die Bildschirmorientierung. Zum Beispiel ändert das Drehen eines Mobiltelefons von vertikal zu horizontal normalerweise den Bildschirm von Hochformat zu Querformat. Ohne eine spezifische Ausrichtung im Manifest passen die meisten Apps ihr Layout an, um sich an diese neue Bildschirmorientierung anzupassen.

Das `orientation`-Mitglied des Manifests ermöglicht es Ihnen, zu steuern, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Ausrichtung für Ihre App angeben, können Sie entscheiden, ob Ihre App sich an Bildschirmorientierungsänderungen anpassen soll oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Zum Beispiel können Sie durch das Festlegen von `"orientation": "portrait-primary"` angeben, dass Ihre App vorzugsweise immer im aufrechten Hochformat relativ zum Bildschirm angezeigt werden soll, auch wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz wann immer möglich zu beachten.

Das untenstehende Beispiel veranschaulicht, wie das Layout einer Web-App erscheinen könnte, wenn ein Mobiltelefon gedreht wird. Für dieses Beispiel wird angenommen, dass der `orientation`-Wert der App auf `any` gesetzt ist, was es der App erlaubt, zwischen allen `orientation`-Werten zu wechseln, wenn das Mobiltelefon gedreht wird. Es wird auch angenommen, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Sequenz zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position aus der Ausgangsposition wie folgt rotiert wird:

- Oben links: `portrait-primary` (Ausgangsposition)
- Oben rechts: `landscape-primary` (90 Grad)
- Unten links: `portrait-secondary` (180 Grad)
- Unten rechts: `landscape-secondary` (270 Grad)

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device portrait-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-secondary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-secondary</code></div>
  </div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
}

.orientation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.device {
  width: 200px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
}

.screen {
  width: 180px;
  height: 280px;
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-bar {
  background-color: #4285f4;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.landscape-primary,
.landscape-secondary {
  width: 300px;
  height: 200px;
}

.landscape-primary .screen,
.landscape-secondary .screen {
  width: 280px;
  height: 180px;
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(180deg);
}

.label {
  margin-top: 10px;
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Bereich und Standardverhalten

Die angegebene `orientation` wird auf alle obersten {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird er diese als Standardausrichtung der App während ihrer gesamten Lebensdauer verwenden, es sei denn, sie wird zur Laufzeit überschrieben.
Das bedeutet, dass Browser zu dieser Standardausrichtung zurückkehren werden, wann immer der oberste Browsing-Kontext navigiert wird.

### Auswahl einer bevorzugten Ausrichtung für Ihre Web-App

Indem Sie eine spezifische Ausrichtung festlegen, können Sie sicherstellen, dass Ihre Web-App optimal für ihren Inhalt und ihre Benutzeroberfläche angezeigt wird.
Zum Beispiel eignet sich eine Video-App oft besser für das Querformat, während eine Lese-App typischerweise besser im Hochformat funktioniert.

Das Nicht-Festlegen einer Ausrichtung kann auch eine bewusste Wahl sein, um Ihrer Web-App die flexible Anpassung an verschiedene Geräte und Nutzerpräferenzen zu ermöglichen.

### Manifest `orientation` vs. Verhalten der Screen Orientation API

Während das `orientation`-Manifestmitglied die Standardausrichtung der Web-App festlegt, kann die Ausrichtung eines obersten Browsing-Kontexts nach dem Start der Web-App mit der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) geändert werden.

Die `orientation`-Werte sind im Web-App-Manifest und in der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Web-App-Manifest:

  - Schlägt die bevorzugte Standardausrichtung der Web-App mit dem `orientation`-Manifestmitglied vor.
  - Setzt die anfängliche Ausrichtung beim Start der App fest.

- Screen Orientation API:

  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung zur Laufzeit (zum Beispiel Sperrung der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die [`lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode der Screen Orientation API hat begrenzte Unterstützung in verschiedenen Browsern.
  > Überprüfen Sie ihre Kompatibilität, wenn Sie planen, sie zur dynamischen Änderung der Bildschirmausrichtung zur Laufzeit zu verwenden.

### Plattform- und Browserbeschränkungen

Beim Hinzufügen der Ausrichtungspräferenz für Ihre App sollten Sie die folgenden Überlegungen und Einschränkungen beachten:

- Browseranbieter und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Anliegen und Plattformkonventionen können einschränken, welche Bildschirmausrichtungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für spezifische `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht die Änderung der Standardausrichtung einer Web-App, während sie in bestimmten Anzeigemodi verwendet wird (z. B. [`"display": "browser"`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser)).

## Beispiele

### Festlegen einer festen Ausrichtung für eine Web-App

Dieses Beispiel setzt die Ausrichtung der App auf `portrait-primary`. Bei Annahme der Unterstützung durch Browser und Gerät wird die App immer im aufrechten Hochformat angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Festlegen einer flexiblen Ausrichtung für eine Web-App

Betrachten Sie eine Fotoanzeige- und -bearbeitungs-App. In der Manifestdatei der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies erlaubt es der App, in der aktuellen Ausrichtung des Geräts gestartet zu werden und sich sowohl an `portrait`- als auch `landscape`-Orientierungen anzupassen, während die Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es den Benutzern, Fotos in der jeweils am besten geeigneten Ausrichtung bequem anzusehen und zu bearbeiten, je nach Anzeige oder aktueller Nutzungskontext.

```json
{
  "name": "PhotoGallery Pro",
  "short_name": "PhotoGal",
  "description": "A professional photo gallery and editing application",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "any",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.photogallery"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API)
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für Geräteausrichtung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)

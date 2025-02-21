---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das Manifest-Mitglied `orientation` wird verwendet, um die Standardausrichtung für Ihre Webanwendung festzulegen.
Es definiert, wie die App beim Start und während der Nutzung in Bezug auf die Bildschirmausrichtung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann zur Laufzeit auf verschiedene Weise geändert werden, zum Beispiel durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

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

  - : Ein String, der die Standardausrichtung für die Web-App angibt.
    Wenn das `orientation`-Mitglied nicht angegeben oder ein ungültiger Wert bereitgestellt wird, verwendet die Web-App in der Regel die natürliche Ausrichtung des Geräts sowie Benutzer- oder Systemausrichtungseinstellungen.

    Der `orientation`-Wert muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Web-App in jeder von dem Betriebssystem des Geräts oder den Benutzereinstellungen erlaubten Ausrichtung an.
        Diese ermöglicht es der App, sich frei zu drehen, um die Ausrichtung des Geräts bei dessen Rotation anzupassen.

    - `natural`

      - : Zeigt die Web-App in der für das Gerät als am natürlichsten geltenden Ausrichtung an, wie sie vom Browser, Betriebssystem, den Benutzereinstellungen oder dem Bildschirm selbst bestimmt wird. Dies entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:

        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` gewöhnlich `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal genutzt werden, wie Computermonitore und Tablets, ist `natural` gewöhnlich `landscape-primary`.

        Wenn das Gerät gedreht wird, kann es sein, dass sich die App dreht oder nicht dreht, um die natürliche Ausrichtung des Geräts zu entsprechen; dieses Verhalten kann je nach Gerät, Browser-Implementierung und Benutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Web-App mit größerer Höhe als Breite an.
        Diese ermöglicht es der App, zwischen den Ausrichtungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Web-App im Hochformat an, typischerweise mit aufrecht gehaltenem Gerät.
        Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus Hochformat sind.
        Abhängig von der Geräte- und Browser-Implementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Web-App in umgekehrtem Hochformat an, was dasselbe wie `portrait-primary` um 180 Grad gedreht ist.
        Abhängig von der Geräte- und Browser-Implementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Web-App mit größerer Breite als Höhe an.
        Diese ermöglicht es der App, zwischen den Ausrichtungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Web-App im Querformat an, typischerweise mit in seiner Standard-Horizontalposition gehaltenem Gerät.
        Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus querformatig sind.
        Abhängig von der Geräte- und Browser-Implementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape-secondary`

      - : Zeigt die Web-App in umgekehrtem Querformat an, was dasselbe wie `landscape-primary` um 180 Grad gedreht ist.
        Abhängig von der Geräte- und Browser-Implementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

## Beschreibung

Um das Manifest-Mitglied `orientation` zu verstehen, ist es wichtig, mit den folgenden konzepten in Bezug auf die Ausrichtung vertraut zu sein:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmausrichtung**: Definiert die physische Ausrichtung des Anzeigebildschirms des Geräts.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App im Verhältnis zur Bildschirmausrichtung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert es in der Regel die Bildschirmausrichtung. Beispielsweise schaltet das Drehen eines Mobiltelefons von vertikal nach horizontal den Bildschirm in der Regel von Hochformat zu Querformat. Ohne eine bestimmte im Manifest festgelegte Ausrichtung passen die meisten Apps ihr Layout so an, dass es der neuen Bildschirmausrichtung entspricht.

Das `orientation`-Mitglied des Manifests ermöglicht es Ihnen, zu steuern, wie Ihre App auf diese Änderungen reagiert. Durch das Festlegen einer bevorzugten Ausrichtung für Ihre App können Sie entscheiden, ob Ihre App auf Änderungen der Bildschirmausrichtung reagieren oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Wenn Sie beispielsweise `"orientation": "portrait-primary"` festlegen, können Sie angeben, dass Ihre App immer im aufrechten Hochformat relativ zum Bildschirm angezeigt werden soll, auch wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz, wenn möglich, zu respektieren.

Das folgende Beispiel veranschaulicht, wie das Layout einer Web-App möglicherweise aussieht, wenn ein Mobiltelefon gedreht wird. Für dieses Beispiel wird angenommen, dass der `orientation`-Wert der App auf `any` gesetzt ist, sodass die App zwischen allen `orientation`-Werten wechseln kann, wenn das Mobiltelefon gedreht wird. Außerdem wird angenommen, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Sequenz zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position von der Startposition aus wie folgt ist:

- Oben links: `portrait-primary` (Startposition)
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

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird dieser als Standardausrichtung der App während ihrer gesamten Lebensdauer verwendet, es sei denn, er wird zur Laufzeit überschrieben.
Das bedeutet, dass Browser zu dieser Standardausrichtung zurückkehren werden, wenn der oberste Browsing-Kontext navigiert wird.

### Bevorzugte Ausrichtung für Ihre Web-App auswählen

Durch das Festlegen einer bestimmten Ausrichtung können Sie sicherstellen, dass Ihre Web-App für ihre Inhalte und Benutzeroberfläche optimal angezeigt wird.
Beispielsweise ist eine Video-App oft besser für die Querformat-Ausrichtung geeignet, während eine Lese-App typischerweise besser im Hochformat funktioniert.

Das Nicht-Spezifizieren einer Ausrichtung kann auch eine bewusste Wahl sein, die es Ihrer Web-App ermöglicht, sich flexibel an verschiedene Geräte und Benutzerpräferenzen anzupassen.

### Manifest `orientation` vs. Screen Orientation API Verhalten

Während das Manifest-Mitglied `orientation` die Standardausrichtung der Web-App festlegt, kann die Ausrichtung eines obersten Browsing-Kontextes geändert werden, sobald die Web-App läuft, indem die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) verwendet wird.

Die `orientation`-Werte sind im Web-App-Manifest und in der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Web-App-Manifest:

  - Schlägt die bevorzugte Standardausrichtung der Web-App mithilfe des `orientation`-Manifest-Mitglieds vor.
  - Legt die anfängliche Ausrichtung fest, wenn die App gestartet wird.

- Screen Orientation API:

  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung zur Laufzeit (zum Beispiel, um die Ausrichtung mittels [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) zu sperren).

  > [!NOTE]
  > Die Methode [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) der Screen Orientation API hat eine begrenzte Unterstützung in verschiedenen Browsern.
  > Überprüfen Sie ihre Kompatibilität, wenn Sie planen, sie zu verwenden, um die Bildschirmausrichtung zur Laufzeit dynamisch zu ändern.

### Plattform- und Browser-Einschränkungen

Beim Hinzufügen der Ausrichtungspräferenz für Ihre App sollten Sie die folgenden Überlegungen und Einschränkungen im Auge behalten:

- Browservendoren und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Erwägungen und Plattformkonventionen können einschränken, welche Bildschirmausrichtungen und Anzeigemodi gemeinsam verwendet werden können.
- Die Unterstützung für bestimmte `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht die Änderung der Standardausrichtung einer Web-App in bestimmten Anzeigemodi (z.B. [`"display": "browser"`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser)).

## Beispiele

### Eine feste Ausrichtung für eine Web-App angeben

Dieses Beispiel legt die Ausrichtung der App auf `portrait-primary` fest. Angenommen, der Browser und das Gerät unterstützen dies, wird die App immer im aufrechten Hochformat angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Eine flexible Ausrichtung für eine Web-App festlegen

Betrachten Sie eine Fotoanzeige- und Bearbeitungs-App. Im Manifest der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies ermöglicht es der App, in der aktuellen Ausrichtung des Geräts gestartet zu werden und sich an sowohl `portrait`- als auch `landscape`-Ausrichtungen anzupassen, wenn Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es Benutzern, Fotos bequem in derjenigen Ausrichtung anzusehen und zu bearbeiten, die am besten zum aktuellen Display oder zum aktuellen Nutzungskontext passt.

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
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für die Geräteausrichtung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)

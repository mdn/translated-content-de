---
title: "MediaDevices: Methode getUserMedia()"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer um Erlaubnis zur Nutzung eines Medieneingangs, der einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Spuren enthält, die die angeforderten Medientypen umfassen.

Dieser Stream kann beispielsweise eine Videospur (erzeugt durch eine Hardware- oder virtuelle Videoquelle wie eine Kamera, ein Videoaufzeichnungsgerät, einen Bildschirmfreigabedienst usw.), eine Audiospur (ähnlich erzeugt durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, A/D-Wandler oder Ähnliches) und möglicherweise andere Spurtypen enthalten.

Sie gibt ein {{jsxref("Promise")}} zurück, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird. Wenn der Benutzer die Erlaubnis verweigert oder keine passende Medien verfügbar sind, wird das Promise mit `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) jeweils abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Promise _weder_ aufgelöst noch abgelehnt wird, da der Benutzer keine Entscheidung treffen muss und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`

  - : Ein Objekt, das die Typen der angeforderten Medien sowie Anforderungen an jeden Typ angibt.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, die die angeforderten Medientypen beschreiben. Entweder oder beide müssen angegeben werden. Wenn der Browser nicht alle Medientracks mit den angegebenen Typen, die die gegebenen Einschränkungen erfüllen, finden kann, wird das zurückgegebene Promise mit `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Sowohl für `video` als auch `audio` ist der Wert entweder ein boolean oder ein Objekt. Der Standardwert ist `false`.

    - Wenn `true` für einen Medientyp angegeben wird, muss der resultierende Stream unbedingt diesen Typ von Track enthalten. Wenn aus irgendeinem Grund ein solcher nicht enthalten werden kann, wird das zurückgegebene Promise abgelehnt.
    - Wenn `false` für einen Medientyp angegeben wird, darf der resultierende Stream diesen Typ von Track _nicht_ enthalten, andernfalls wird das zurückgegebene Promise abgelehnt. Da `video` und `audio` standardmäßig `false` sind, wird das zurückgegebene Promise immer abgelehnt, wenn das `constraints`-Objekt keine dieser Eigenschaften enthält oder überhaupt nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben wird, wird das Objekt als [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt empfängt, wenn die angeforderten Medien erfolgreich bezogen wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Obwohl sowohl der Benutzer als auch das Betriebssystem Zugriff auf das Hardwaregerät gewährt haben und keine Hardwareprobleme aufgetreten sind, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird eine Ausnahme ausgelöst, wenn ein Problem aufgetreten ist, das die Nutzung des Geräts verhindert hat.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn ein oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies geschieht, wenn der Browsing-Kontext unsicher ist (d.h. die Seite wurde über HTTP statt HTTPS geladen). Es passiert auch, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Session keinen Zugriff auf das Gerät erhält, der Benutzer den Zugriff für die aktuelle Session verweigert oder der Benutzer den Zugriff auf Mediengeräte global verweigert hat. In Browsern, die das Verwalten von Medienberechtigungen mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn Permissions Policy nicht so konfiguriert ist, dass sie den Zugriff auf die Eingabequelle(n) erlaubt.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten `SecurityError`
    > dafür; `SecurityError` hat eine neue Bedeutung übernommen.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Medientracks des angegebenen Typs gefunden wurden, die die gegebenen Einschränkungen erfüllen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, obwohl der Benutzer die Erlaubnis zum Verwenden der passenden Geräte erteilt hat, ist ein Hardwarefehler auf Betriebssystem-, Browser- oder Webseite-Ebene aufgetreten, der den Zugriff auf das Gerät verhindert hat.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die angegebenen Einschränkungen dazu führten, dass keine Kandidatengeräte die angeforderten Kriterien erfüllten. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren String-Wert der Name einer Einschränkung ist, die unmöglich zu erfüllen war, sowie eine `message`-Eigenschaft mit einer menschenlesbaren Nachricht zur Erklärung des Problems.

    > [!NOTE]
    > Da dieser Fehler auftreten kann, selbst wenn der Benutzer noch keine
    > Erlaubnis zur Nutzung des zugrunde liegenden Geräts erteilt hat, kann
    > er potenziell als
    > {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche verwendet werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Unterstützung für Benutzer-Medien im [`Document`](/de/docs/Web/API/Document), in dem `getUserMedia()` aufgerufen wurde, deaktiviert ist. Der Mechanismus, durch den die Unterstützung für Benutzer-Medien aktiviert und deaktiviert wird, bleibt den einzelnen User Agents überlassen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die bedeutende Bedenken hinsichtlich der Privatsphäre aufwerfen kann, enthält die Spezifikation von `getUserMedia()` eine breite Palette von Datenschutz- und Sicherheitsanforderungen, die Browser erfüllen müssen.

`getUserMedia()` ist eine leistungsstarke Funktion, die nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert. Ein sicherer Kontext ist in Kürze eine Seite, die über HTTPS oder das `file:///`-URL-Schema geladen wird oder eine Seite, die von `localhost` geladen wird.

Darüber hinaus ist immer die Erlaubnis des Benutzers erforderlich, um auf die Audio- und Videoeingaben des Benutzers zuzugreifen. Nur ein Top-Level-Dokumentkontext eines Fensters für einen gültigen Ursprung kann überhaupt die Erlaubnis zur Nutzung von `getUserMedia()` einholen, es sei denn, der Top-Level-Kontext erteilt einem bestimmten {{HTMLElement("iframe")}} ausdrücklich die Erlaubnis, dies mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zu tun. Andernfalls wird der Benutzer nie nach der Erlaubnis zur Nutzung der Eingabegeräte gefragt.

Für weitere Details zu diesen Anforderungen und Regeln, wie sie sich im Kontext Ihrer laufenden Code-Umgebung widerspiegeln und wie Browser mit Datenschutz- und Sicherheitsfragen umgehen, lesen Sie weiter.

### Datenschutz

Als API, die bedeutende Bedenken hinsichtlich der Privatsphäre aufwerfen kann, ist `getUserMedia()` durch die Spezifikation an sehr spezielle Anforderungen zur Benachrichtigung und Verwaltung der Benutzererlaubnis gebunden. Zuerst muss `getUserMedia()` immer die Erlaubnis des Benutzers einholen, bevor irgendein Medienerfassungsgerät wie eine Webcam oder ein Mikrofon geöffnet wird. Browser können eine "Einmal-pro-Domain"-Erlaubnisfunktion anbieten, müssen jedoch mindestens beim ersten Mal nachfragen, und der Benutzer muss die fortlaufende Erlaubnis ausdrücklich erteilen, wenn er dies wünscht.

Gleich wichtig sind die Regeln zur Benachrichtigung. Browser sind verpflichtet, einen Indikator anzuzeigen, der zeigt, dass eine Kamera oder ein Mikrofon in Gebrauch ist, zusätzlich zu einem möglichen Hardware-Indikator. Sie müssen auch einen Indikator anzeigen, dass die Erlaubnis zur Nutzung eines Eingabegeräts erteilt wurde, selbst wenn das Gerät derzeit nicht aktiv aufzeichnet.

Beispielsweise zeigt die URL-Leiste in Firefox ein pulsierendes rotes Symbol an, um anzuzeigen, dass eine Aufnahme läuft. Das Symbol ist grau, wenn die Erlaubnis vorhanden ist, aber die Aufnahme derzeit nicht läuft. Die physische Leuchte des Geräts wird verwendet, um anzuzeigen, ob die Aufnahme derzeit aktiv ist. Wenn Sie Ihre Kamera stumm geschaltet haben (sogenanntes "Facemuting"), geht das Kameralicht aus, um anzuzeigen, dass die Kamera Sie derzeit nicht aufnimmt, ohne die Erlaubnis, die Kamera nach Beendigung der Stummschaltung wieder zu verwenden, zu verwerfen.

### Sicherheit

Es gibt mehrere Möglichkeiten, bei denen Sicherheitsverwaltung und -kontrollen in einem {{Glossary("user_agent", "User Agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die beiden [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktiven, die auf `getUserMedia()` anwendbar sind, sind `camera` und `microphone`.

Beispielsweise aktiviert dieser HTTP-Header die Nutzung einer Kamera für das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom gleichen Ursprung geladen werden:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Erlaubnis nur für diesen Frame anfordern, was eindeutig sicherer ist als eine allgemeinere Erlaubnis anzufordern. Hierbei muss die Fähigkeit zur Nutzung sowohl der Kamera als auch des Mikrofons angegeben werden:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Verschlüsselungsbasierte Sicherheit

Die Methode `getUserMedia()` ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Ein sicherer Kontext ist einer, bei dem der Browser mit hinreichendem Vertrauen davon ausgeht, dass der Inhalt des Dokuments sicher über HTTPS/TLS geladen wurde und die Offenlegung in unsicheren Kontexten begrenzt ist. Wenn ein Dokument nicht in einem sicheren Kontext geladen wird, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, was den Zugriff auf `getUserMedia()` unmöglich macht.

Der Versuch, in dieser Situation auf `getUserMedia()` zuzugreifen, führt zu einem {{jsxref("TypeError")}}.

#### Sicherheitsprüfung der Dokumentquelle

Aufgrund des offensichtlichen Sicherheitsrisikos, das mit `getUserMedia()` verbunden ist, wenn es unerwartet oder ohne sorgfältige Sicherheitsverwaltung verwendet wird, kann es nur in sicheren Kontexten verwendet werden. Es gibt eine Reihe von unsicheren Wegen, ein Dokument zu laden, das seinerseits versuchen könnte, `getUserMedia()` aufzurufen. Die folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein in ein sandboxed {{HTMLElement("iframe")}} geladenes Dokument kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das mit einer `data://` oder `blob://` URL geladen wird, die keinen Ursprung hat (wie z. B. wenn eine dieser URLs vom Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen. Diese Art von URLs, die aus JavaScript-Code geladen werden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der kein Ursprung vorhanden ist, wie z. B. wenn das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Frames anzugeben.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen greifen Sie auf das [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Singleton-Objekt über [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zu, so:

```js
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
```

Ähnlich dazu sieht der Code, der die rohen Promises direkt verwendet, so aus:

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    /* use the stream */
  })
  .catch((err) => {
    /* handle the error */
  });
```

> [!NOTE]
> Wenn das aktuelle Dokument nicht sicher geladen wurde,
> wird `navigator.mediaDevices` `undefined` sein, und
> Sie können `getUserMedia()` nicht verwenden. Siehe [Sicherheit](#sicherheit) für weitere Informationen zu diesem und anderen sicherheitsbezogenen Themen bei der Verwendung von `getUserMedia()`.

Nachfolgend einige Beispiele für den `constraints`-Parameter.

Das folgende Beispiel fordert sowohl Audio als auch Video ohne spezielle Anforderungen an:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Obwohl Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen unzugänglich sind, kann eine Anwendung die benötigten und gewünschten Kamera- und Mikrofonfähigkeiten_anfordern, indem zusätzliche Einschränkungen verwendet werden. Das folgende Beispiel drückt eine Präferenz für eine Kameraauflösung von 1280x720 aus:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, dies zu berücksichtigen, kann jedoch andere Auflösungen zurückgeben, wenn keine exakte Übereinstimmung verfügbar ist oder der Benutzer sie überschreibt.

Um eine Fähigkeit zu _fordern_, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (alias `min === max`). Das folgende Beispiel verlangt eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder höherer Auflösung existiert, wird das zurückgegebene Promise mit `OverconstrainedError` abgelehnt und der Benutzer wird nicht gefragt.

Der Grund für das unterschiedliche Verhalten liegt darin, dass die Schlüsselwörter `min`, `max` und `exact` inhärent verpflichtend sind – während einfache Werte und ein als `ideal` bezeichnetes Schlüsselwort nicht verpflichtend sind. Hier ist ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat, wenn verwendet, eine Art Anziehungskraft – was bedeutet, dass der Browser versuchen wird, die Einstellung (und Kamera, wenn Sie mehr als eine haben) mit der geringsten [fitness distance](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den ideal angegebenen Werten zu finden.

Einfache Werte sind von Natur aus ideal, was bedeutet, dass das erste unserer Auflösungsbeispiele auch so geschrieben werden könnte:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen. Zum Beispiel, auf Mobilgeräten wird das Folgende die Frontkamera (falls verfügbar) der Rückkamera vorziehen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera zu _fordern_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere Nicht-Zahlen-Einschränkung ist die `deviceId`-Einschränkung. Wenn Sie eine `deviceId` aus [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie damit ein bestimmtes Gerät anfragen:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das obige Beispiel wird die angeforderte Kamera zurückgeben oder eine andere Kamera, wenn diese bestimmte Kamera nicht mehr verfügbar ist. Nochmals, um die spezielle Kamera zu _fordern_, würden Sie verwenden:

```js
getUserMedia({
  video: {
    deviceId: {
      exact: myExactCameraOrBustDeviceId,
    },
  },
});
```

### Breite und Höhe

Dieses Beispiel gibt eine Präferenz für die Kameraauflösung an und weist das resultierende [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt einem Videoelement zu.

```js
// Prefer camera resolution nearest to 1280x720.
const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((err) => {
    // always check for errors at the end.
    console.error(`${err.name}: ${err.message}`);
  });
```

### Bildrate

Niedrigere Bildraten können in manchen Fällen wünschenswert sein, wie bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

```js
const constraints = {
  video: { frameRate: { ideal: 10, max: 15 } },
};
```

### Vorder- und Rückkamera

Auf Mobiltelefonen.

```js
let front = false;
document.getElementById("flip-button").onclick = () => {
  front = !front;
};

const constraints = {
  video: { facingMode: front ? "user" : "environment" },
};
```

> [!NOTE]
> In bestimmten Fällen kann es notwendig sein, den aktuellen Kameramodus zu lösen, bevor zu einem anderen gewechselt werden kann. Um den Kameramodus zu wechseln, ist es ratsam, die Medienressourcen freizugeben, indem die Methode "stop()" auf der Spur aufgerufen wird, bevor ein anderer Modus angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflisten verfügbarer Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Bildschirminhalt als [`MediaStream`](/de/docs/Web/API/MediaStream) erfassen
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Einen Stream mit Bildschirminhalten erhalten
- [Webcam-Fotos machen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Ein Tutorial zur Verwendung von `getUserMedia()` zum Aufnehmen von Standbildern anstelle von Videos

---
title: "MediaDevices: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle fordert den Benutzer um Erlaubnis auf, ein Medieneingabegerät zu verwenden, das einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Spuren erstellt, die die angeforderten Medientypen enthalten.

Dieser Stream kann beispielsweise eine Videospur umfassen (erstellt durch eine Hardware- oder virtuelle Videoquelle wie eine Kamera, ein Videoaufzeichnungsgerät, einen Bildschirmfreigabedienst usw.), eine Audiospur (ähnlich, erstellt durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, einen A/D-Wandler oder ähnliches) und möglicherweise andere Spurtypen.

Es gibt ein {{jsxref("Promise")}} zurück, das ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt auflöst.
Wenn dem Benutzer die Erlaubnis verweigert wird oder keine passenden Medien verfügbar sind, wird das Versprechen mit `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) entsprechend abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Versprechen _weder_ aufgelöst noch abgelehnt wird, da der Benutzer nicht verpflichtet ist, eine Wahl zu treffen, und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`

  - : Ein Objekt, das die Typen von Medien spezifiziert, die angefordert werden, sowie alle Anforderungen für jeden Typ.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, die die angeforderten Medientypen beschreiben. Mindestens einer davon muss angegeben werden. Wenn der Browser nicht alle Medienspurtypen finden kann, die den angegebenen Einschränkungen entsprechen, wird das zurückgegebene Versprechen mit `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Für sowohl `video` als auch `audio` kann der Wert entweder ein Boolean oder ein Objekt sein. Der Standardwert ist `false`.

    - Wenn für einen Medientyp `true` angegeben wird, ist der resultierende Stream _verpflichtet_, diese Art von Spur zu enthalten. Wenn aus irgendeinem Grund keine enthalten sein kann, wird das zurückgegebene Versprechen abgelehnt.
    - Wenn für einen Medientyp `false` angegeben wird, _darf_ der resultierende Stream diesen Spurtyp nicht enthalten, oder das zurückgegebene Versprechen wird abgelehnt. Da sowohl `video` als auch `audio` standardmäßig `false` sind, wird das zurückgegebene Versprechen immer abgelehnt, wenn das `constraints`-Objekt keine dieser Eigenschaften enthält oder gar nicht vorhanden ist.
    - Wenn für einen Medientyp ein Objekt angegeben wird, wird es als [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, wenn die angeforderten Medien erfolgreich erhalten wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Obwohl der Benutzer und das Betriebssystem beide den Zugriff auf das Hardwaregerät gewährt haben und keine Hardwareprobleme aufgetreten sind, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird ein Problem beim Verhindern der Nutzung des Geräts aufgetreten sein.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies geschieht, wenn der Browserkontext unsicher ist (d.h. die Seite über HTTP statt HTTPS geladen wurde). Es tritt auch auf, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Instanz keinen Zugriff auf das Gerät hat, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer den Zugriff auf Mediengeräte generell verweigert hat. In Browsern, die die Verwaltung von Medienberechtigungen mit der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Permissions Policy nicht konfiguriert ist, um den Zugriff auf die Eingabequelle(n) zu ermöglichen.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten `SecurityError` für diesen Zweck; `SecurityError` hat nun eine neue Bedeutung erhalten.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Medienstrecken der angegebenen Typen gefunden wurden, die den gegebenen Einschränkungen entsprechen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer zwar die Erlaubnis zur Verwendung der passenden Geräte erteilt hat, jedoch ein Hardwarefehler auf Betriebssystem-, Browser- oder Webseitenniveau aufgetreten ist, der den Zugriff auf das Gerät verhindert hat.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die festgelegten Einschränkungen zu keinen passenden Geräten führten, die die angeforderten Kriterien erfüllten. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren Stringwert der Name einer Einschränkung ist, die nicht erfüllt werden konnte, sowie eine `message`-Eigenschaft, die eine menschenlesbare Zeichenkette enthält, die das Problem erklärt.

    > [!NOTE]
    > Da dieser Fehler auch auftreten kann, bevor der Benutzer die Erlaubnis zur Nutzung des zugrunde liegenden Geräts erteilt hat, kann er potenziell als {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche genutzt werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Unterstützung für Benutzer-Medien im [`Document`](/de/docs/Web/API/Document) deaktiviert ist, auf dem `getUserMedia()` aufgerufen wurde. Der Mechanismus, mit dem die Unterstützung für Benutzer-Medien aktiviert oder deaktiviert wird, bleibt dem jeweiligen Benutzeragenten überlassen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die erhebliche Datenschutzbedenken umfassen kann, legt die Spezifikation von `getUserMedia()` eine Vielzahl von Datenschutz- und Sicherheitsanforderungen fest, die Browser erfüllen müssen.

`getUserMedia()` ist eine leistungsstarke Funktion, die nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, wodurch der Zugriff auf `getUserMedia()` verhindert wird. Ein sicherer Kontext ist, kurz gesagt, eine Seite, die über HTTPS oder das `file:///`-URL-Schema geladen wurde, oder eine Seite, die von `localhost` geladen ist.

Darüber hinaus ist die Erlaubnis des Benutzers immer erforderlich, um auf die Audio- und Videoeingaben des Benutzers zuzugreifen. Nur ein oberstes Dokumentfensterkontext mit gültiger Herkunft kann sogar die Erlaubnis zur Verwendung von `getUserMedia()` anfordern, es sei denn, der Top-Level-Kontext erteilt ausdrücklich Erlaubnis für ein bestimmtes {{HTMLElement("iframe")}} dies zu tun, indem es [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet. Andernfalls wird der Benutzer nicht einmal um Erlaubnis für die Nutzung der Eingabegeräte gebeten.

Für weitere Details zu diesen Anforderungen und Regeln, wie sie im Kontext, in dem Ihr Code ausgeführt wird, widergespiegelt werden und wie Browser Benutzer- und Datenschutzbedenken verwalten, lesen Sie weiter.

### Benutzer-Datenschutz

Als eine API, die erhebliche Datenschutzbedenken umfassen kann, unterliegt `getUserMedia()` sehr spezifischen Anforderungen in Bezug auf die Benutzerbenachrichtigung und Genehmigungsverwaltung. Erstens muss `getUserMedia()` immer eine Benutzererlaubnis einholen, bevor ein Medieneingabegerät wie eine Webcam oder ein Mikrofon geöffnet wird. Browser dürfen eine einmalige Genehmigung pro Domain-Feature anbieten, aber sie müssen mindestens beim ersten Mal fragen, und der Benutzer muss ausdrücklich die fortlaufende Genehmigung erteilen, wenn er dies wünscht.

Ebenso wichtig sind die Regeln zur Benachrichtigung. Browser müssen einen Indikator anzeigen, der zeigt, dass eine Kamera oder ein Mikrofon in Gebrauch ist, über jedes vorhandene Hardware-Anzeige hinaus. Sie müssen auch einen Indikator zeigen, dass die Genehmigung zur Verwendung eines Geräts erteilt wurde, auch wenn das Gerät im Moment nicht aktiv aufnimmt.

Zum Beispiel zeigt die URL-Leiste in Firefox ein pulsierendes rotes Symbol an, um anzuzeigen, dass eine Aufzeichnung im Gange ist. Das Symbol ist grau, wenn die Erlaubnis erteilt wurde, aber die Aufzeichnung derzeit nicht im Gange ist. Das physische Licht des Geräts wird verwendet, um anzuzeigen, ob die Aufzeichnung derzeit aktiv ist oder nicht. Wenn Sie Ihre Kamera stumm geschaltet haben (so genanntes "Facemuting"), erlischt das Aktivitätslicht Ihrer Kamera, um anzuzeigen, dass die Kamera Sie momentan nicht aktiv aufnimmt, ohne die Erlaubnis zu verwerfen, die Kamera wieder zu verwenden, sobald das Stummschalten beendet ist.

### Sicherheit

Es gibt eine Reihe von Wegen, wie Sicherheitsverwaltungen und Kontrollen in einem {{Glossary("user_agent", "user agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die beiden [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktiven, die auf `getUserMedia()` anzuwenden sind, sind `camera` und `microphone`.

Zum Beispiel aktiviert dieser HTTP-Header die Nutzung einer Kamera durch das Dokument und jedes eingebettete {{HTMLElement("iframe")}}-Element, das aus demselben Ursprung geladen wird:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Erlaubnis nur für diesen Frame anfordern, was zweifellos sicherer ist als das Anfordern einer allgemeineren Erlaubnis. Hier geben Sie an, dass beide Kamera und Mikrofon verwendet werden müssen:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Verschlüsselungsbasierte Sicherheit

Die `getUserMedia()`-Methode ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Ein sicherer Kontext ist einer, bei dem der Browser mit ziemlicher Sicherheit weiß, dass das Dokument sicher geladen wurde, unter Verwendung von HTTPS/TLS, und der eingeschränkten Exposition zu unsicheren Kontexten. Wenn ein Dokument nicht in einem sicheren Kontext geladen ist, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, was den Zugriff auf `getUserMedia()` unmöglich macht.

Der Versuch, auf `getUserMedia()` in dieser Situation zuzugreifen, führt zu einem {{jsxref("TypeError")}}.

#### Dokumentenquellen-Sicherheit

Aufgrund des offensichtlichen Sicherheitsbedenkens, das mit `getUserMedia()` verbunden ist, wenn es unerwartet oder ohne sorgfältig verwaltete Sicherheit verwendet wird, kann es nur in sicheren Kontexten verwendet werden. Es gibt einige unsichere Wege, ein Dokument zu laden, das wiederum versuchen könnte, `getUserMedia()` aufzurufen. Die folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein in ein sandboxed {{HTMLElement("iframe")}}-Element geladenes Dokument kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das über eine `data://`- oder `blob://`-URL geladen wurde und keinen Ursprung hat (zum Beispiel, wenn eine dieser URLs vom Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen. Diese Arten von URLs, die von JavaScript-Code geladen werden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, wie z.B. wenn das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Frames anzugeben.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen greifen Sie auf das [`MediaDevices`](/de/docs/Web/API/MediaDevices) Singleton-Objekt über [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zu, wie folgt:

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

Ähnlich sieht der Code bei direkter Verwendung der Roh-Promises so aus:

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
> Wenn das aktuelle Dokument nicht sicher geladen ist,
> ist `navigator.mediaDevices` `undefined`, und `getUserMedia()` kann nicht verwendet werden. Weitere Informationen dazu und zu anderen sicherheitsbezogenen Themen im Zusammenhang mit der Verwendung von `getUserMedia()` finden Sie unter [Sicherheit](#sicherheit).

Im Folgenden sind einige Beispiele für den `constraints`-Parameter aufgeführt.

Das Folgende fordert sowohl Audio als auch Video an, ohne spezifische Anforderungen:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen unzugänglich sind, kann eine Anwendung die Kamera- und Mikrofonfähigkeiten anfordern, die sie benötigt und wünscht, indem sie zusätzliche Einschränkungen verwendet. Das Folgende drückt eine Präferenz für eine Kameraauflösung von 1280x720 aus:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, dies zu erfüllen, kann jedoch andere Auflösungen zurückgeben, wenn eine exakte Übereinstimmung nicht verfügbar ist oder der Benutzer sie übersteuert.

Um eine Fähigkeit _anzufordern_, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (alias `min === max`). Das Folgende verlangt eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder höherer Auflösung existiert, wird das zurückgegebene Versprechen mit `OverconstrainedError` abgelehnt, und der Benutzer wird nicht aufgefordert.

Der Grund für den Unterschied im Verhalten liegt darin, dass die Schlüsselwörter `min`, `max` und `exact` von Natur aus zwingend sind, während einfache Werte und ein Schlüsselwort namens `ideal` dies nicht sind. Hier ist ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat, wenn verwendet, eine Anziehungskraft — was bedeutet, dass der Browser versucht, die Einstellung (und die Kamera, wenn Sie mehr als eine haben) mit der kleinsten [Fitness Distance](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den idealen angegebenen Werten zu finden.

Einfache Werte sind von Natur aus ideal, was bedeutet, dass das erste unserer Beispielauflösungen so hätte geschrieben werden können:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen. Zum Beispiel wird auf mobilen Geräten das Folgende die Frontkamera (falls verfügbar) über die Rückkamera bevorzugen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera _zwingen_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere Nicht-Zahlen-Einschränkung ist die `deviceId`-Einschränkung. Wenn Sie eine `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie sie verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das obige Beispiel wird die angeforderte Kamera zurückgeben oder eine andere Kamera, wenn diese bestimmte Kamera nicht mehr verfügbar ist. Um die spezifische Kamera _zu verlangen_, würden Sie verwenden:

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

Dieses Beispiel gibt eine Präferenz für die Kameraauflösung vor und weist das resultierende [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt einem Videoelement zu.

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

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, z.B. bei WebRTC-Übertragungen mit eingeschränkter Bandbreite.

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
> In bestimmten Fällen kann es erforderlich sein, den aktuellen Kameraausrichtungsmodus freizugeben, bevor Sie zu einem anderen wechseln können. Um den Kameraswitch sicherzustellen, ist es ratsam, die Medienressourcen durch Aufruf der "stop()"-Methode auf der Spur freizugeben, bevor Sie einen anderen Ausrichtungsmodus anfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflistung verfügbarer Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Erfassen des Bildschirminhalts als [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Abrufen eines Streams mit Bildschirminhalten
- [Erstellen von Webcambildern](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Eine Anleitung zur Verwendung von `getUserMedia()` für das Aufnehmen von Standbildern anstelle von Videos

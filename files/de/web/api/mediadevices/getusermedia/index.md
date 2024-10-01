---
title: "MediaDevices: Methode getUserMedia()"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Interfaces fordert den Benutzer auf, die Erlaubnis zur Nutzung einer Medieneingabe zu erteilen, die einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Spuren erzeugt, die die angeforderten Medientypen enthalten.

Dieser Stream kann beispielsweise eine Video-Spur enthalten (produziert entweder durch eine Hardware- oder virtuelle Videoquelle wie eine Kamera, ein Videoaufzeichnungsgerät, ein Bildschirmfreigabedienst usw.) oder eine Audio-Spur (ähnlich, erzeugt durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, einen A/D-Wandler oder Ähnliches) und möglicherweise andere Spurtypen.

Es wird ein {{jsxref("Promise")}} zurückgegeben, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt auflöst. Wenn der Benutzer die Erlaubnis verweigert oder passende Medien nicht verfügbar sind, wird das Promise mit einem `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) entsprechend abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Promise _weder_ auflöst noch ablehnt, da der Benutzer nicht verpflichtet ist, eine Auswahl zu treffen und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`

  - : Ein Objekt, das die Arten von Medien angibt, die angefordert werden sollen, zusammen mit den Anforderungen für jeden Typ.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, das die angeforderten Medientypen beschreibt. Einer oder beide müssen angegeben werden. Wenn der Browser nicht alle Medienspuren mit den angegebenen Typen finden kann, die den gegebenen Einschränkungen entsprechen, wird das zurückgegebene Promise mit einem `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Für sowohl `video` als auch `audio` ist der Wert entweder Boolean oder ein Objekt. Der Standardwert ist `false`.

    - Wenn `true` für einen Medientyp angegeben wird, muss der resultierende Stream diesen Spuren-Typ enthalten. Wenn aus irgendeinem Grund keiner enthalten sein kann, wird das zurückgegebene Promise abgelehnt.
    - Wenn `false` für einen Medientyp angegeben wird, darf der resultierende Stream diesen Spuren-Typ _nicht_ enthalten, oder das zurückgegebene Promise wird abgelehnt. Da sowohl `video` als auch `audio` standardmäßig auf `false` gesetzt sind, wird das zurückgegebene Promise immer abgelehnt, wenn das `constraints`-Objekt keine dieser Eigenschaften enthält oder gar nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben wird, wird das Objekt als `MediaTrackConstraints`-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, wenn die angeforderten Medien erfolgreich erhalten wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Obwohl der Benutzer und das Betriebssystem beide Zugriff auf das Hardware-Gerät gewährt haben und keine Hardwareprobleme auftraten, die ein `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird eine Ausnahme ausgelöst, wenn ein Problem auftrat, das die Verwendung des Geräts verhinderte.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies tritt auf, wenn der Browserkontext unsicher ist (d. h., die Seite wurde über HTTP statt über HTTPS geladen). Es tritt auch auf, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Instanz keinen Zugriff auf das Gerät erhalten darf, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer global jeglichen Zugriff auf Nutzermedien-Geräte verweigert hat. In Browsern, die das Verwalten von Medienberechtigungen über [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn Permissions Policy nicht so konfiguriert ist, dass der Zugriff auf die Eingabequelle(n) erlaubt ist.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten `SecurityError` dafür; `SecurityError` hat jedoch eine neue Bedeutung angenommen.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Medienspuren des angegebenen Typs gefunden wurden, die die gegebenen Einschränkungen erfüllen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn, obwohl der Benutzer die Erlaubnis zur Verwendung der passenden Geräte erteilt hat, ein Hardwarefehler auf System-, Browser- oder Webseitenniveau auftrat, der den Zugriff auf das Gerät verhinderte.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die angegebenen Einschränkungen dazu führen, dass keine geeigneten Geräte gefunden werden, die die angeforderten Kriterien erfüllen. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren Stringwert der Name einer Einschränkung ist, die unmöglich zu erfüllen war, und eine `message`-Eigenschaft, die eine menschenlesbare Erklärung des Problems enthält.

    > [!NOTE]
    > Da dieser Fehler auftreten kann, selbst wenn der Benutzer noch keine Erlaubnis zur Verwendung des zugrunde liegenden Geräts erteilt hat, kann er potenziell als {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche verwendet werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Unterstützung von Nutzermedien im [`Document`](/de/docs/Web/API/Document), auf dem `getUserMedia()` aufgerufen wurde, deaktiviert ist. Der Mechanismus, durch den die Unterstützung von Nutzermedien aktiviert und deaktiviert wird, bleibt dem einzelnen User-Agent überlassen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als API, die erhebliche Bedenken hinsichtlich der Privatsphäre aufwerfen kann, legt die Spezifikation von `getUserMedia()` eine Vielzahl von Datenschutz- und Sicherheitsanforderungen fest, die von Browsern erfüllt werden müssen.

`getUserMedia()` ist eine leistungsfähige Funktion, die nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert. Ein sicherer Kontext ist, kurz gesagt, eine Seite, die über HTTPS oder das `file:///`-URL-Schema geladen wurde, oder eine Seite, die von `localhost` geladen wurde.

Darüber hinaus ist immer die Erlaubnis des Benutzers erforderlich, um auf die Audio- und Videoeingaben des Benutzers zuzugreifen. Nur das oberste Dokumentfenster eines gültigen Ursprungs kann überhaupt die Erlaubnis zur Nutzung von `getUserMedia()` anfordern, es sei denn, der oberste Kontext gewährt einem bestimmten {{HTMLElement("iframe")}} ausdrücklich die Erlaubnis dazu unter Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy). Andernfalls wird der Benutzer nie um Erlaubnis zur Nutzung der Eingabegeräte gebeten.

Für weitere Details zu diesen Anforderungen und Regeln, wie sie sich auf den Kontext auswirken, in dem Ihr Code ausgeführt wird, und darüber, wie Browser Datenschutz- und Sicherheitsprobleme der Benutzer verwalten, lesen Sie weiter.

### Benutzerdatenschutz

Als API, die erhebliche Bedenken hinsichtlich der Privatsphäre aufwerfen kann, unterliegt `getUserMedia()` in der Spezifikation sehr spezifischen Anforderungen für Benachrichtigungen und Erlaubnisverwaltung des Benutzers. Erstens muss `getUserMedia()` immer die Erlaubnis des Benutzers einholen, bevor ein Medienerfassungsgerät wie eine Webcam oder ein Mikrofon geöffnet wird. Browser können eine Einmal-pro-Domain-Erlaubnisfunktion anbieten, müssen aber mindestens das erste Mal fragen, und der Benutzer muss bei der Wahl einer dauerhaften Erlaubnis ausdrücklich zustimmen.

Ebenso wichtig sind die Regeln rund um die Benachrichtigung. Browser müssen ein Indikator anzeigen, der zeigt, dass eine Kamera oder ein Mikrofon in Gebrauch ist, zusätzlich zu jedem vorhandenen Hardware-Indikator. Sie müssen auch einen Indikator anzeigen, dass die Erlaubnis erteilt wurde, ein Gerät zur Eingabe zu verwenden, selbst wenn das Gerät derzeit nicht aktiv aufnimmt.

Beispielsweise zeigt die URL-Leiste in Firefox ein pulsierendes rotes Symbol an, um anzuzeigen, dass eine Aufnahme im Gange ist. Das Symbol ist grau, wenn die Erlaubnis erteilt wurde, aber die Aufnahme derzeit nicht läuft. Das physische Licht des Geräts wird verwendet, um anzuzeigen, ob die Aufnahme derzeit aktiv ist oder nicht. Wenn Sie Ihre Kamera stummschalten (sogenanntes "Facemuting"), erlischt das Aktivitätslicht Ihrer Kamera, um anzuzeigen, dass die Kamera Sie nicht aktiv aufnimmt, ohne die Erlaubnis zu verweigern, die Kamera nach dem Stummschalten wieder zu verwenden.

### Sicherheit

Es gibt mehrere Möglichkeiten, wie Sicherheitsmanagement und -kontrollen in einem {{Glossary("user_agent", "User-Agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die beiden [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktiven, die für `getUserMedia()` gelten, sind `camera` und `microphone`.

Beispielsweise aktiviert dieser HTTP-Header die Nutzung einer Kamera durch das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom selben Ursprung geladen werden:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Erlaubnis nur für diesen Rahmen anfordern, was offensichtlich sicherer ist als eine allgemeinere Erlaubnis anzufordern. Hier geben wir an, dass wir die Möglichkeit benötigen, sowohl Kamera als auch Mikrofon zu verwenden:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Verschlüsselungsbasierte Sicherheit

Die `getUserMedia()`-Methode ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Ein sicherer Kontext ist einer, bei dem der Browser vernünftigerweise zuversichtlich ist, dass er ein Dokument enthält, das sicher mit HTTPS/TLS geladen wurde und ein begrenztes Risiko für unsichere Kontexte hat. Wenn ein Dokument nicht in einem sicheren Kontext geladen wird, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, wodurch der Zugriff auf `getUserMedia()` unmöglich wird.

Der Versuch, `getUserMedia()` in dieser Situation zuzugreifen, wird zu einem {{jsxref("TypeError")}} führen.

#### Sicherheit der Dokumentenquelle

Aufgrund der offensichtlichen Sicherheitsbedenken, die mit `getUserMedia()` verbunden sind, wenn es unerwartet oder ohne sorgfältiges Sicherheitsmanagement verwendet wird, kann es nur in sicheren Kontexten verwendet werden. Es gibt mehrere unsichere Möglichkeiten, ein Dokument zu laden, das möglicherweise versucht, `getUserMedia()` aufzurufen. Die folgenden Beispiele zeigen Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein in ein sandboxed {{HTMLElement("iframe")}}-Element geladenes Dokument kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>`-Element hat sein [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das mit einer `data://`- oder `blob://`-URL geladen wurde, die keinen Ursprung hat (z. B. wenn eine dieser URLs vom Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen. Diese Arten von URLs, die durch JavaScript-Code geladen werden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, wie z. B. wenn das [`srcdoc`](/de/docs/Web/HTML/Element/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Rahmens anzugeben.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen wird das [`MediaDevices`](/de/docs/Web/API/MediaDevices) Singleton-Objekt über [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) aufgerufen, wie folgt:

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

Ähnlich sieht der Code aus, wenn die rohen Promises direkt verwendet werden:

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
> Wenn das aktuelle Dokument nicht sicher geladen ist, wird `navigator.mediaDevices` `undefined` sein, und Sie können `getUserMedia()` nicht verwenden. Siehe [Sicherheit](#sicherheit) für weitere Informationen dazu und zu anderen Sicherheitsproblemen im Zusammenhang mit der Verwendung von `getUserMedia()`.

Nachfolgend sind einige Beispiele für den `constraints`-Parameter aufgeführt.

Das folgende Beispiel fordert sowohl Audio als auch Video ohne spezifische Anforderungen an:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen unzugänglich sind, kann eine Anwendung die Kameraund Mikrofonfähigkeiten anfordern, die sie benötigt und wünscht, indem sie zusätzliche Einschränkungen verwendet. Das folgende Beispiel äußert eine Präferenz für eine Kameraauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, dies zu erfüllen, kann jedoch andere Auflösungen zurückgeben, wenn keine exakte Übereinstimmung verfügbar ist oder der Benutzer sie überschreibt.

Um eine Fähigkeit _zwingend_ zu machen, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (auch bekannt als `min === max`). Das folgende Beispiel verlangt eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser Auflösung oder höher existiert, wird das zurückgegebene Promise mit `OverconstrainedError` abgelehnt und der Benutzer wird nicht befragt.

Der Grund für das unterschiedliche Verhalten besteht darin, dass die Schlüsselwörter `min`, `max` und `exact` grundsätzlich verbindlich sind, während einfache Werte und ein Schlüsselwort namens `ideal` nicht. Hier ist ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat, wenn verwendet, Gravitation — das bedeutet, dass der Browser versuchen wird, die Einstellung (und die Kamera, wenn Sie mehr als eine haben) mit der geringsten [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den angegebenen idealen Werten zu finden.

Einfache Werte sind von Natur aus ideal, was bedeutet, dass das erste unserer Auflösungsbeispiele oben so hätte geschrieben werden können:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen. Beispielsweise wird auf mobilen Geräten die folgende Präferenz die Frontkamera (wenn vorhanden) über die Rückkamera bevorzugen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera _zwingend_ zu verwenden, nutzen Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere nicht nummerische Einschränkung ist die `deviceId`-Einschränkung. Wenn Sie ein `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie es verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das obige Beispiel gibt die von Ihnen angeforderte Kamera zurück oder eine andere Kamera, wenn diese spezielle Kamera nicht mehr verfügbar ist. Um die spezifische Kamera _zwingend_ anzufordern, würden Sie verwenden:

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

Dieses Beispiel gibt eine Präferenz für die Kameraauflösung und weist das resultierende [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt einem Videoelement zu.

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

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, z. B. bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

```js
const constraints = {
  video: { frameRate: { ideal: 10, max: 15 } },
};
```

### Front- und Rückkamera

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
> In bestimmten Fällen kann es notwendig sein, den aktuellen Kameramodus zu deaktivieren, bevor Sie zu einem anderen wechseln können. Um sicherzustellen, dass der Kamerawechsel erfolgt, ist es ratsam, die Medienressourcen durch Aufruf der "stop()"-Methode auf der Spur freizugeben, bevor Sie einen anderen Modus anfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)-Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflistung verfügbarer Mediengeräte
- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Erfassen von Bildschirminhalten als [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Erfassen eines Streams, der Bildschirm-Inhalte enthält
- [Aufnehmen von Webcam-Fotos](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_Still_Photos): Ein Tutorial über die Verwendung von `getUserMedia()`, um Standbilder statt Videos aufzunehmen

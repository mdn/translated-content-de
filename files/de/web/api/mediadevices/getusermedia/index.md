---
title: "MediaDevices: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Interfaces fordert den Benutzer auf, die Erlaubnis zu erteilen, ein Medieneingabegerät zu nutzen, das einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Tracks der angeforderten Medientypen erzeugt.

Dieser Stream kann beispielsweise einen Videotrack umfassen (erzeugt von einer Hardware- oder virtuellen Videoquelle wie einer Kamera, einem Videogerät, einem Dienst zur Bildschirmübertragung usw.), einen Audiotrack (ähnlich erzeugt durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, A/D-Wandler oder ähnliches) und möglicherweise andere Tracktypen.

Es wird ein {{jsxref("Promise")}} zurückgegeben, der auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird. Wenn der Benutzer die Erlaubnis verweigert oder keine passenden Medien verfügbar sind, wird das Promise mit `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Promise _weder_ aufgelöst noch abgelehnt wird, da der Benutzer nicht verpflichtet ist, eine Entscheidung zu treffen und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`

  - : Ein Objekt, das die Typen von Medien angibt, die angefordert werden sollen, sowie etwaige Anforderungen für jeden Typ.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, die die angeforderten Medientypen beschreiben. Mindestens eines von beiden muss angegeben werden. Wenn der Browser nicht alle Medientracks mit den angegebenen Typen finden kann, die den angegebenen Einschränkungen entsprechen, wird das zurückgegebene Promise mit einem `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Sowohl für `video` als auch für `audio` ist der Wert entweder ein Boolean oder ein Objekt. Der Standardwert ist `false`.

    - Wenn `true` für einen Medientyp angegeben wird, muss der daraus resultierende Stream diesen Tracktyp enthalten. Wenn das aus irgendeinem Grund nicht möglich ist, wird das zurückgegebene Promise abgelehnt.
    - Wenn `false` für einen Medientyp angegeben wird, darf der resultierende Stream diesen Tracktyp _nicht_ enthalten, oder das zurückgegebene Promise wird abgelehnt. Da sowohl `video` als auch `audio` standardmäßig auf `false` gesetzt sind, wird das zurückgegebene Promise immer abgelehnt, wenn das `constraints`-Objekt keine der beiden Eigenschaften enthält oder gar nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben wird, wird das Objekt als ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen fulfillment handler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, wenn die angeforderten Medien erfolgreich erfasst wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Obwohl sowohl der Benutzer als auch das Betriebssystem Zugriff auf das Hardwaregerät gewährt haben und es keine Hardwareprobleme gab, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird die Ausnahme ausgelöst, wenn ein Problem auftrat, das die Verwendung des Geräts verhinderte.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies passiert, wenn der Browsing-Kontext unsicher ist (d. h. die Seite wurde über HTTP statt HTTPS geladen). Es passiert auch, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Sitzung keinen Zugriff auf das Gerät haben darf, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer globalen Zugriff auf Benutzer-Mediengeräte verweigert hat. In Browsern, die die Verwaltung von Medienberechtigungen mit [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Permissions Policy nicht so konfiguriert ist, dass der Zugriff auf die Eingabequelle(n) erlaubt ist.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten stattdessen `SecurityError`; `SecurityError` hat eine neue Bedeutung erhalten.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Medientracks des angegebenen Typs gefunden wurden, die die gegebenen Einschränkungen erfüllen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn, obwohl der Benutzer die Erlaubnis zur Verwendung der passenden Geräte erteilt hat, ein Hardwarefehler auf Betriebssystem-, Browser- oder Webseitebene auftrat, der den Zugriff auf das Gerät verhinderte.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die angegebenen Einschränkungen zu keinen geeigneten Geräten geführt haben, die die angeforderten Kriterien erfüllten. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren String-Wert der Name einer Einschränkung ist, die nicht erfüllt werden konnte, und eine `message`-Eigenschaft, die einen menschenlesbaren String enthält, der das Problem erklärt.

    > [!NOTE]
    > Da dieser Fehler auch dann auftreten kann, wenn der Benutzer noch nicht die Erlaubnis zur Verwendung des zugrunde liegenden Geräts erteilt hat, kann er potenziell als [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Oberfläche verwendet werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Unterstützung von Benutzermedien im [`Document`](/de/docs/Web/API/Document), auf dem `getUserMedia()` aufgerufen wurde, deaktiviert ist. Der Mechanismus, durch den die Unterstützung von Benutzermedien aktiviert oder deaktiviert wird, bleibt dem jeweiligen Benutzeragenten überlassen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die erheblichen Datenschutzbedenken unterliegen kann, beinhaltet die Spezifikation von `getUserMedia()` eine Vielzahl von Datenschutz- und Sicherheitsanforderungen, die von den Browsern erfüllt werden müssen.

`getUserMedia()` ist eine leistungsstarke Funktion, die nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert. Ein sicherer Kontext ist im Wesentlichen eine Seite, die über HTTPS oder das `file:///` URL-Schema geladen wurde oder eine Seite, die von `localhost` geladen wird.

Darüber hinaus ist immer eine Benutzergenehmigung erforderlich, um auf die Audio- und Videoeingaben des Benutzers zuzugreifen. Nur ein top-level Dokumentkontext eines gültigen Ursprungs kann überhaupt die Erlaubnis anfordern, `getUserMedia()` zu verwenden, es sei denn, der top-level Kontext gewährt einem bestimmten {{HTMLElement("iframe")}} ausdrücklich die Erlaubnis, dies mit [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) zu tun. Andernfalls wird der Benutzer nicht einmal um Erlaubnis zum Nutzen der Eingabegeräte gebeten.

Für weitere Details zu diesen Anforderungen und Regeln, wie sie im Kontext reflektiert werden, in dem Ihr Code ausgeführt wird, und darüber, wie Browser Benutzerdatenschutz- und Sicherheitsprobleme verwalten, lesen Sie weiter.

### Privatsphäre des Benutzers

Als eine API, die erhebliche Datenschutzbedenken beinhalten kann, erfordert die Spezifikation von `getUserMedia()`, dass sehr spezifische Anforderungen an die Benachrichtigung der Benutzer und das Berechtigungsmanagement erfüllt werden. Zuerst muss `getUserMedia()` immer die Erlaubnis des Benutzers einholen, bevor ein irgendein Medium erfassendes Eingabegerät, wie eine Webcam oder ein Mikrofon, geöffnet wird. Browser dürfen eine Once-per-Domain-Berechtigungsfunktion anbieten, müssen jedoch mindestens beim ersten Mal nachfragen, und der Benutzer muss ausdrücklich laufende Berechtigungen erteilen, wenn er dies wünscht.

Von gleicher Bedeutung sind die Regeln zur Benachrichtigung. Browser sind verpflichtet, einen Indikator anzuzeigen, der zeigt, dass eine Kamera oder ein Mikrofon verwendet wird, über jeden vorhandenen Hardware-Indikator hinaus. Sie müssen auch einen Indikator anzeigen, dass die Berechtigung zur Verwendung eines Geräts für die Eingabe erteilt wurde, selbst wenn das Gerät derzeit nicht aktiv aufzeichnet.

Beispielsweise zeigt die URL-Leiste in Firefox ein pulsierendes rotes Symbol an, um anzuzeigen, dass die Aufzeichnung läuft. Das Symbol ist grau, wenn die Berechtigung erteilt wurde, aber derzeit keine Aufzeichnung erfolgt. Die physische Lampe des Geräts wird verwendet, um anzuzeigen, ob die Aufzeichnung aktiv ist oder nicht. Wenn Sie Ihre Kamera stummschalten (so genanntes "facemuting"), erlischt das Aktivitätslicht Ihrer Kamera, um anzuzeigen, dass die Kamera Sie nicht aktiv aufzeichnet, ohne die Berechtigung für die Fortsetzung der Verwendung der Kamera nach Ende der Stummschaltung zu verwerfen.

### Sicherheit

Es gibt eine Reihe von Möglichkeiten, wie Sicherheitsmanagement und -kontrollen in einem [Benutzeragenten](/de/docs/Glossary/user_agent) dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die zwei [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktiven, die auf `getUserMedia()` anwendbar sind, sind `camera` und `microphone`.

Zum Beispiel ermöglicht dieser HTTP-Header die Verwendung einer Kamera durch das Dokument und eingebettete {{HTMLElement("iframe")}}-Elemente, die aus dem gleichen Ursprung geladen werden:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfragen:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Berechtigung nur für diesen Frame anfordern, was eindeutig sicherer ist, als eine allgemeinere Berechtigung anzufordern. Hier geben wir an, dass wir die Fähigkeit benötigen, sowohl Kamera als auch Mikrofon zu verwenden:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Sicherheitsbasierte Verschlüsselung

Die `getUserMedia()`-Methode ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Ein sicherer Kontext ist ein, dessen der Browser vernünftigerweise zuversichtlich ist, dass er ein Dokument enthält, das sicher geladen wurde, unter Verwendung von HTTPS/TLS und dass es auf unsichere Kontexte begrenzt ist. Wenn ein Dokument nicht in einem sicheren Kontext geladen ist, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, was den Zugriff auf `getUserMedia()` unmöglich macht.

Der Versuch, `getUserMedia()` in dieser Situation zu verwenden, führt zu einem {{jsxref("TypeError")}}.

#### Sicherheit der Dokumentenquelle

Aufgrund der offensichtlichen Sicherheitsbedenken, die mit einer unerwarteten Verwendung von `getUserMedia()` oder ohne sorgfältiges Sicherheitsmanagement einhergehen, kann es nur in sicheren Kontexten genutzt werden. Es gibt eine Reihe unsicherer Wege, auf denen ein Dokument geladen werden kann und die möglicherweise den Versuch unternehmen, `getUserMedia()` aufzurufen. Im Folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein Dokument, das in ein sandboxed {{HTMLElement("iframe")}}-Element geladen ist, kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das unter Verwendung einer `data://`- oder `blob://`-URL geladen wurde, die keinen Ursprung hat (z. B. wenn eine dieser URLs vom Benutzer in die Adressleiste eingegeben wurde), kann `getUserMedia()` nicht aufrufen. Diese Art von URLs, die aus dem JavaScript-Code geladen wurden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, so wie wenn das [`srcdoc`](/de/docs/Web/HTML/Element/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Frames zu spezifizieren.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen greifen Sie auf das singleton [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Objekt mit [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zu, wie folgt:

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

Ähnlich sieht der Code mit den rohen Versprechungen direkt so aus:

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
> Wenn das aktuelle Dokument nicht sicher geladen ist, ist `navigator.mediaDevices` `undefined` und Sie können `getUserMedia()` nicht verwenden. Weitere Informationen hierzu und zu anderen Sicherheitsproblemen im Zusammenhang mit `getUserMedia()` finden Sie unter [Sicherheit](#sicherheit).

Im Folgenden finden Sie einige Beispiele für den `constraints`-Parameter.

Das folgende Beispiel fordert sowohl Audio als auch Video an, ohne spezifische Anforderungen:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen unzugänglich sind, kann eine Anwendung die Kamera- und Mikrofonfähigkeiten anfordern, die sie benötigt und wünscht, indem sie zusätzliche Einschränkungen verwendet. Das folgende Beispiel gibt eine Präferenz für eine Kameraauflösung von 1280x720 an:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, dies zu berücksichtigen, kann aber andere Auflösungen zurückgeben, wenn keine exakte Übereinstimmung verfügbar ist oder der Benutzer sie überschreibt.

Um eine Fähigkeit zu _erfordern_, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (a.k.a. `min === max`). Das folgende Beispiel verlangt eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder einer höheren Auflösung vorhanden ist, wird das zurückgegebene Promise mit `OverconstrainedError` abgelehnt und der Benutzer wird nicht aufgefordert.

Der Grund für den Unterschied im Verhalten ist, dass die Schlüsselwörter `min`, `max` und `exact` von Natur aus zwingend sind, während einfache Werte und ein Schlüsselwort namens `ideal` es nicht sind. Hier ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert, wenn verwendet, hat eine Schwere, was bedeutet, dass der Browser versucht, die Einstellung (und Kamera, wenn Sie mehr als eine haben) mit der kleinsten [fitness distance](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den angegebenen idealen Werten zu finden.

Einfachen Werten sind von Natur aus ideal, was bedeutet, dass das erste Beispiel unserer Auflösungen oben so geschrieben werden könnte:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen. Zum Beispiel wird auf mobilen Geräten das Folgende die Frontkamera (sofern verfügbar) gegenüber der Rückkamera bevorzugen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera _zu erfordern_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere nicht-numerische Einschränkung ist die Einschränkung `deviceId`. Wenn Sie eine `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie sie verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das Obige wird die angeforderte Kamera zurückgeben oder eine andere Kamera, wenn diese spezielle Kamera nicht mehr verfügbar ist. Um die spezifische Kamera _zu erfordern_, würden Sie verwenden:

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

Dieses Beispiel gibt eine Präferenz für Kameraauflösungen an und weist das resultierende [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt einem Videoelement zu.

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

### Bildfrequenz

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, zum Beispiel bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

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
> In bestimmten Fällen kann es notwendig sein, den aktuellen Kamerabetriebsmodus freizugeben, bevor Sie zu einem anderen wechseln können. Um den Kamerawechsel sicherzustellen, ist es ratsam, die Medienressourcen freizugeben, indem die "stop()"-Methode auf dem Track aufgerufen wird, bevor eine andere Blickrichtung angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)-Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflistung verfügbarer Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Erfassung von Bildschirminhalten als [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Erfassen eines Streams, der Bildschirm-Inhalte enthält
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_Still_Photos): Ein Tutorial zur Verwendung von `getUserMedia()`, um statt Videos Standbilder zu machen

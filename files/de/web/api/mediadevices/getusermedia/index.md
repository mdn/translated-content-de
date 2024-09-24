---
title: "MediaDevices: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode des {{domxref("MediaDevices")}}-Interfaces fordert den Benutzer um Erlaubnis zur Nutzung eines Medien-Eingabegeräts auf, das einen {{domxref("MediaStream")}} erzeugt, der die angeforderten Medientypen als Spuren enthält.

Dieser Stream kann beispielsweise eine Videospur enthalten (erzeugt entweder von einer Hardware- oder virtuellen Videoquelle wie einer Kamera, einem Videoaufzeichnungsgerät, einem Dienst zur Bildschirmfreigabe usw.), eine Audiospur (ähnlich erzeugt von einer physischen oder virtuellen Audioquelle wie einem Mikrofon, einem A/D-Wandler oder Ähnlichem) und möglicherweise andere Spurtypen.

Es wird ein {{jsxref("Promise")}} zurückgegeben, der sich zu einem {{domxref("MediaStream")}}-Objekt auflöst.
Wenn der Benutzer die Erlaubnis verweigert oder keine passenden Medien verfügbar sind, wird das Promise mit `NotAllowedError` oder `NotFoundError` {{domxref("DOMException")}} abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Promise _weder_ auflöst noch ablehnt, da der Benutzer nicht verpflichtet ist, eine Wahl zu treffen und die Anforderung ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`

  - : Ein Objekt, das die zu anfordernden Medientypen zusammen mit eventuellen Anforderungen für jeden Typ speichert.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, die die angeforderten Medientypen beschreiben. Entweder oder beide müssen angegeben werden. Wenn der Browser keine Medien-Spuren mit den angegebenen Typen findet, die die angegebenen Anforderungen erfüllen, wird das zurückgegebene Promise mit `NotFoundError` {{domxref("DOMException")}} abgelehnt.

    Sowohl für `video` als auch `audio` kann der Wert entweder ein Boolean oder ein Objekt sein. Der Standardwert ist `false`.

    - Wenn `true` für einen Medientyp angegeben wird, muss der resultierende Stream diesen Spurtyp enthalten. Wenn aus irgendeinem Grund keine Spur enthalten sein kann, wird das zurückgegebene Promise abgelehnt.
    - Wenn `false` für einen Medientyp angegeben wird, darf der resultierende Stream diesen Spurtyp _nicht_ enthalten, oder das zurückgegebene Promise wird abgelehnt. Da sowohl `video` als auch `audio` standardmäßig auf `false` gesetzt sind, wird das zurückgegebene Promise immer abgelehnt, wenn das `constraints`-Objekt keine dieser Eigenschaften enthält oder gar nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben wird, wird das Objekt als {{domxref("MediaTrackConstraints")}}-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein {{domxref("MediaStream")}}-Objekt erhält, wenn die angeforderten Medien erfolgreich erlangt wurden.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}

  - : Obwohl sowohl der Benutzer als auch das Betriebssystem den Zugriff auf das Hardwaregerät gestattet haben und keine Hardwareprobleme aufgetreten sind, die einen `NotReadableError` {{domxref("DOMException")}} verursachen würden, wird eine Ausnahme ausgelöst, wenn ein Problem aufgetreten ist, das die Verwendung des Geräts verhindert.

- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies tritt auf, wenn der Browsing-Kontext unsicher ist (d. h., die Seite wurde über HTTP statt HTTPS geladen). Es tritt auch auf, wenn der Benutzer festgelegt hat, dass die aktuelle Browsing-Instanz keinen Zugriff auf das Gerät haben soll, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer den Zugriff auf Mediengeräte global verweigert hat. In Browsern, die die Verwaltung von Medienberechtigungen mit der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Permissions Policy nicht bereitgestellt wurde, um den Zugriff auf die Eingangsquelle(n) zu ermöglichen.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten `SecurityError` hierfür; `SecurityError` hat eine neue Bedeutung erhalten.

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn keine Medien-Spuren des angegebenen Typs vorhanden sind, die die gegebenen Anforderungen erfüllen.
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn zwar die Erlaubnis zur Nutzung der entsprechenden Geräte erteilt wurde, aber ein Hardwarefehler aufgetreten ist, der den Zugriff auf das Gerät verhindert.
- `OverconstrainedError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn die angegebenen Einschränkungen zu keiner Geräteliste führen, die die angeforderten Kriterien erfüllt. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren Zeichenfolgenwert der Name einer Einschränkung ist, die nicht erfüllt werden konnte, und eine `message`-Eigenschaft, die eine menschlich lesbare Zeichenfolge enthält, die das Problem erklärt.

    > [!NOTE]
    > Da dieser Fehler auch auftreten kann, wenn der Benutzer noch keine Erlaubnis zur Nutzung des zugrunde liegenden Geräts erteilt hat, kann er potenziell als [Fingerprinting](/de/docs/Glossary/Fingerprinting) verwendet werden.

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Unterstützung für Benutzer-Medien im {{domxref("Document")}}, auf dem `getUserMedia()` aufgerufen wurde, deaktiviert ist. Der Mechanismus, durch den die Unterstützung für Benutzer-Medien aktiviert und deaktiviert wird, bleibt dem einzelnen Benutzeragenten überlassen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebene Liste von Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da `{{domxref("navigator.mediaDevices")}}` in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die erhebliche Bedenken hinsichtlich der Privatsphäre beinhalten kann, legt die Spezifikation von `getUserMedia()` eine breite Palette von Datenschutz- und Sicherheitsanforderungen fest, die Browser erfüllt werden müssen.

`getUserMedia()` ist eine leistungsstarke Funktion, die nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, wodurch der Zugriff auf `getUserMedia()` verhindert wird. Ein sicherer Kontext ist im Wesentlichen eine Seite, die über HTTPS oder das `file:///`-URL-Schema geladen wurde, oder eine Seite, die von `localhost` geladen wurde.

Darüber hinaus ist stets die Erlaubnis des Benutzers erforderlich, um auf die Audio- und Videoeingaben des Benutzers zuzugreifen. Nur das oberste Dokument eines Fensters für einen gültigen Ursprung kann um Erlaubnis bitten, um `getUserMedia()` zu verwenden, es sei denn, der oberste Kontext erteilt ausdrücklich die Erlaubnis für ein bestimmtes {{HTMLElement("iframe")}}, dies mit der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) zu tun. Andernfalls wird der Benutzer niemals um Erlaubnis für die Nutzung der Eingabegeräte gebeten.

Lesen Sie weiter für zusätzliche Details zu diesen Anforderungen und Regeln, wie sie im Kontext, in dem Ihr Code läuft, reflektiert werden, und darüber, wie Browser Fragen der Benutzerprivatsphäre und -sicherheit verwalten.

### Benutzerprivatsphäre

Als eine API, die erhebliche Bedenken hinsichtlich der Privatsphäre beinhalten kann, unterliegt `getUserMedia()` sehr spezifischen Anforderungen der Spezifikation für Benutzerbenachrichtigung und Berechtigungsverwaltung. Erstens muss `getUserMedia()` immer die Erlaubnis des Benutzers einholen, bevor es Eingabegeräte wie eine Webcam oder ein Mikrofon öffnet. Browser dürfen eine einmalige Erlaubnis pro Domain anbieten, müssen jedoch mindestens beim ersten Mal fragen, und der Benutzer muss explizit die laufende Erlaubnis gewähren, wenn er dies wählt.

Von gleicher Bedeutung sind die Regeln zur Benachrichtigung. Browser sind verpflichtet, einen Indikator anzuzeigen, der zeigt, dass eine Kamera oder ein Mikrofon verwendet wird, zusätzlich zu einem eventuell vorhandenen Hardwareindikator. Sie müssen auch anzeigen, dass eine Berechtigung gewährt wurde, ein Gerät für Eingaben zu verwenden, selbst wenn das Gerät nicht aktiv aufzeichnet.

Beispielsweise zeigt die URL-Leiste in Firefox ein pulsierendes rotes Symbol an, um darauf hinzuweisen, dass die Aufzeichnung läuft. Das Symbol ist grau, wenn die Berechtigung erteilt wurde, die Aufzeichnung jedoch derzeit nicht läuft. Die physische Leuchte des Geräts wird verwendet, um anzuzeigen, ob die Aufzeichnung derzeit aktiv ist. Wenn Sie Ihre Kamera stummgeschaltet haben (das sogenannte "Facemuting"), erlischt die Kamera-Aktivitätsleuchte, um anzuzeigen, dass die Kamera Sie nicht aktiv aufzeichnet, ohne die Erlaubnis zur Wiederaufnahme der Kamera nach Beendigung der Stummschaltung zu verwerfen.

### Sicherheit

Es gibt mehrere Möglichkeiten, wie Sicherheitsmanagement und -kontrollen in einem {{Glossary("user agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die beiden [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Direktiven, die auf `getUserMedia()` anwendbar sind, sind `camera` und `microphone`.

Zum Beispiel aktiviert dieser HTTP-Header die Nutzung einer Kamera durch das Dokument und jede eingebettete {{HTMLElement("iframe")}}-Elemente, die von demselben Ursprung geladen werden:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Erlaubnis nur für diesen Frame anfordern, was eindeutig sicherer ist als die Anforderung einer allgemeineren Berechtigung. Hier geben wir an, dass wir die Fähigkeit benötigen, sowohl Kamera als auch Mikrofon zu verwenden:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Verschlüsselte Sicherheit

Die `getUserMedia()`-Methode ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Ein sicherer Kontext ist einer, von dem der Browser vernünftigerweise überzeugt ist, dass er ein Dokument enthält, das sicher geladen wurde, mit HTTPS/TLS und begrenztem Zugriff auf unsichere Kontexte. Wenn ein Dokument nicht in einem sicheren Kontext geladen ist, ist die {{domxref("navigator.mediaDevices")}}-Eigenschaft `undefined`, was den Zugriff auf `getUserMedia()` unmöglich macht.

Der Versuch, auf `getUserMedia()` in dieser Situation zuzugreifen, führt zu einem {{jsxref("TypeError")}}.

#### Dokumentsicherheitsquelle

Aufgrund der offensichtlichen Sicherheitsbedenken, die mit `getUserMedia()` verbunden sind, wenn es unerwartet oder ohne sorgfältige Sicherheitsverwaltung verwendet wird, kann es nur in sicheren Kontexten verwendet werden. Es gibt eine Reihe unsicherer Möglichkeiten, ein Dokument zu laden, das wiederum versuchen könnte, `getUserMedia()` aufzurufen. Die folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein Dokument, das in ein sandboxed {{HTMLElement("iframe")}}-Element geladen ist, kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das mit einer `data://`- oder `blob://`-URL geladen wurde, die keinen Ursprung hat (z. B. wenn eine dieser URLs vom Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen. Diese Arten von URLs, die aus JavaScript-Code geladen werden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, wie z. B. wenn das [`srcdoc`](/de/docs/Web/HTML/Element/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Frames zu spezifizieren.

## Beispiele

### Verwendung von getUserMedia()

In der Regel greifen Sie wie folgt auf das {{domxref("MediaDevices")}}-Singleton-Objekt zu: `{{domxref("navigator.mediaDevices")}}`, wie folgt:

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

Ähnlich sieht der Code bei direkter Verwendung von Promises wie folgt aus:

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
> ist `navigator.mediaDevices` `undefined`, und Sie können
> `getUserMedia()` nicht verwenden. Weitere Informationen hierzu und zu
> anderen sicherheitsrelevanten Problemen im Zusammenhang mit der Verwendung von `getUserMedia()` finden Sie unter [Sicherheit](#sicherheit).

Im Folgenden sind einige Beispiele für den `constraints`-Parameter aufgeführt.

Das Folgende fordert sowohl Audio als auch Video ohne spezifische Anforderungen an:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Obwohl Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen nicht zugänglich sind, kann eine Anwendung die Kamera- und Mikrofonfähigkeiten anfordern, die sie benötigt und wünscht, indem zusätzliche Einschränkungen verwendet werden. Das folgende Beispiel drückt eine Präferenz für eine Kameraauflösung von 1280x720 aus:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, dies zu erfüllen, kann jedoch andere Auflösungen zurückgeben, wenn keine genaue Übereinstimmung verfügbar ist oder der Benutzer diese überschreibt.

Um eine Fähigkeit _zu erzwingen_, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (a/k/a `min === max`). Das folgende Beispiel fordert eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder einer höheren Auflösung existiert, wird das zurückgegebene Promise mit `OverconstrainedError` abgelehnt, und der Benutzer wird nicht aufgefordert.

Der Unterschied im Verhalten liegt darin, dass die Schlüsselwörter `min`, `max` und `exact` inhärent zwingend sind, während einfache Werte und ein Schlüsselwort namens `ideal` es nicht sind. Hier ist ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat, wenn er verwendet wird, Schwerkraft, was bedeutet, dass der Browser versuchen wird, die Einstellung (und Kamera, wenn Sie mehr als eine haben) mit der kleinsten [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den angegebenen Idealwerten zu finden.

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

Nicht alle Einschränkungen sind Zahlen. Beispielsweise wird auf mobilen Geräten das folgende Beispiel die Frontkamera (falls vorhanden) gegenüber der hinteren bevorzugen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die hintere Kamera _zu erzwingen_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere nicht numerische Einschränkung ist die `deviceId`-Einschränkung. Wenn Sie einen `deviceId` von {{domxref("mediaDevices.enumerateDevices()")}} haben, können Sie sie verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das obige Beispiel gibt die von Ihnen angeforderte Kamera zurück oder eine andere Kamera, wenn diese spezielle Kamera nicht mehr verfügbar ist. Um die spezifische Kamera _zwingend_ anzufordern, würden Sie erneut verwenden:

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

Dieses Beispiel gibt eine Präferenz für die Kameraauflösung an und weist das resultierende {{domxref("MediaStream")}}-Objekt einem Videoelement zu.

```js
// Bevorzuge Kameraauflösung in der Nähe von 1280x720.
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
    // Überprüfen Sie am Ende immer auf Fehler.
    console.error(`${err.name}: ${err.message}`);
  });
```

### Bildrate

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, z.B. bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

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
> In bestimmten Fällen kann es notwendig sein, den aktuellen Kamera-Facing-Modus freizugeben, bevor Sie zu einem anderen wechseln können. Um den Kameraschalter sicherzustellen, ist es ratsam, die Medienressourcen freizugeben, indem die Methode "stop()" auf der Spur aufgerufen wird, bevor eine andere Facing Mode angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere {{domxref("Navigator.getUserMedia()")}} Legacy-API
- {{domxref("MediaDevices.enumerateDevices()")}}: Auflisten verfügbarer Mediengeräte
- {{domxref("WebRTC API", "", "", "nocode")}}
- {{domxref("Media Capture and Streams API", "", "", "nocode")}}
- {{domxref("Screen Capture API", "", "", "nocode")}}: Aufzeichnen von Bildschirminhalten als {{domxref("MediaStream")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}: Abrufen eines Streams mit Bildschirm-Inhalten
- {{domxref("Media Capture and Streams API/Taking Still Photos", "Aufnehmen von Webcam-Fotos", "", "nocode")}}: Ein Tutorial zur Verwendung von `getUserMedia()`, um Standbilder statt Videos aufzunehmen

---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 75b6c08573c39a7d6557c911502912f1a3c7da9f
---

{{SeeCompatTable}}

Der HTTP-**`Permissions-Policy`**-{{Glossary("response_header", "Response-Header")}} bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem Dokument oder in darin enthaltenen {{HTMLElement("iframe")}}-Elementen zu erlauben oder zu verweigern.

Verstöße gegen eine Richtlinie können über die [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können an einen Server gesendet werden, der in einem direktivspezifischen `report-to`-Parameter per Name angegeben ist, oder andernfalls an den Serverendpunkt mit dem Namen `"default"` (die Zuordnung zwischen Serverendpunktnamen und URLs wird über den HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} festgelegt).
Berichte können auch auf der Seite, für die die Richtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden.
Das Format des Berichts und weitere Details werden in [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) bereitgestellt.

Weitere Informationen finden Sie im Hauptartikel zu [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
# Single directive
Permissions-Policy: <directive>=<allowlist>

# Single directive with reporting endpoint
Permissions-Policy: <directive>=<allowlist>;report-to=<endpoint>

# Multiple directives, with and without server reporting endpoints
Permissions-Policy: <directive>=<allowlist>, <directive>=<allowlist>;report-to=<endpoint>, ...
```

Der Header kann verwendet werden, um die Allowlists für eine oder mehrere Direktiven festzulegen, sowie optional einen direktivspezifischen `report-to`-Parameter, der den Serverendpunkt angibt, an den Berichte über Richtlinienverstöße gesendet werden sollen.
Die Einträge für jede Direktive werden durch Kommas getrennt.

- `<directive>`
  - : Die Permissions-Policy-Direktive, auf die die `allowlist` angewendet werden soll. Eine Liste der zulässigen Direktivnamen finden Sie weiter unten unter [Direktiven](#direktiven).
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Origins, die einen oder mehrere der folgenden, in Klammern eingeschlossenen und durch Leerzeichen getrennten Werte enthält:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Origin erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion wird in Browsing-Kontexten der obersten Ebene und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und nur in allen verschachtelten Browsing-Kontexten (`<iframe>`s) mit demselben Origin erlaubt. Die Funktion ist in Cross-Origin-Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` angesehen werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, sofern das darin geladene Dokument vom selben Origin wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standardwert_ für `allowlist` in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Origins erlaubt (zum Beispiel `"https://a.example.com"`). Origins sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Origins in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Origins verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die für den HTTP-Header `Permissions-Policy` immer eine von `*`, `self` oder `none` ist und das Standardverhalten bestimmt, wenn sie nicht ausdrücklich in einer Richtlinie aufgeführt sind.
    > Diese werden auf den jeweiligen [Referenzseiten für Direktiven](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

- `report-to=<endpoint>` {{optional_inline}}
  - : Der Parameter `report-to` kann verwendet werden, um den Namen eines Reporting-Endpunkts anzugeben, an den Berichte gesendet werden, wenn ein Richtlinienverstoß für die zugehörige Direktive vorliegt.
    Der Endpunktname und seine zugehörige URL müssen in einem separaten HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} angegeben werden.

    Wenn er weggelassen wird, werden Berichte an den [`default`-Reporting-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet, sofern einer definiert wurde.
    Weitere Informationen finden Sie unter [Reporting API](/de/docs/Web/API/Reporting_API).

Wo unterstützt, können Sie Wildcards in Permissions-Policy-Origins einschließen.
Das bedeutet, dass Sie nicht mehrere verschiedene Subdomains explizit in einer Allowlist angeben müssen, sondern sie alle in einem einzigen Origin mit einer Wildcard angeben können.

Also statt:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie Folgendes angeben:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle Informationen über die Beschleunigung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle Informationen über die Lichtmenge in der Umgebung des Geräts erfassen darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Methode [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) verwenden darf, um Ankündigungen für {{Glossary("screen_reader", "Screenreader")}} auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Medien automatisch wiedergeben darf, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden. Wenn diese Richtlinie deaktiviert ist und keine Benutzerinteraktionen stattgefunden haben, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das `autoplay`-Attribut der Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegebenen [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einer `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Verwendung der Topics API ausdrücklich untersagt, schlagen alle Versuche fehl, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, und zwar mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException).

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf.
    Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Berechtigung nicht erteilt ist.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Das von den Hauptmethoden der API zurückgegebene Promise wird mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Berechtigung nicht erteilt ist.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden darf, um User-Agent-Daten mit hoher Entropie abzurufen.
    Wenn die Berechtigung nicht erteilt ist, gibt die Methode nur die Daten mit geringer Entropie `brands`, `mobile` und `platform` zurück.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) des Origins der obersten Ebene.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des gemeinsamen [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für Cross-Origin-Subframes.

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, falls keine Berechtigung zum Erfassen der Bildschirminhalte erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einer `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, lösen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) eine `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus, und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Callbacks dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle Informationen über die Ausrichtung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu ungewöhnlichen oder exotischen Human-Interface-Geräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um in Chat-Anwendungen den Status „verfügbar“/„abwesend“ zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Funktionalität zur Spracherkennung der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/language-model", "language-model")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Prompt API](/de/docs/Web/API/Prompt_API).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) Daten zu den lokal installierten Schriftarten des Benutzers erfassen darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/local-network','local-network')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerkanfragen an lokale Adressen stellen darf.

- {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerkanfragen an lokale und Loopback-Adressen stellen darf. Diese Richtlinien-Direktive ist ein Alias für die detaillierteren Direktiven `local-network` und `loopback-network`.

- {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerkanfragen an Loopback-Adressen stellen darf.

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle Informationen über die Ausrichtung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einer `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Funktionalität zur [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalkennwort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der Anwendung gesendet wurde, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, löst der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) eine `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument ein Video über die entsprechende API im Picture-in-Picture-Modus wiedergeben darf.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von `token-request`-Operationen für [private state token](/de/docs/Web/API/Private_State_Token_API).

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von `token-redemption`- und `send-redemption-record`-Operationen für [private state token](/de/docs/Web/API/Private_State_Token_API).

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüssel-Credentials zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Credentials abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzugeben, dass das Gerät den Bildschirm nicht ausschalten oder abdunkeln soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss verbunden sind oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. in ein {{htmlelement("iframe")}} eingebettet) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader("Permissions-Policy/unload", "unload")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument [`unload`](/de/docs/Web/API/Window/unload_event)-Event-Handler ausführen darf.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele nach Wahl des Benutzers zu teilen, zum Beispiel mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Displays zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Origins den Zugriff auf Geolocation zu erlauben, würden Sie Folgendes verwenden:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff für eine Teilmenge von Origins zu erlauben, würden Sie Folgendes verwenden:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird oder indem für jede Richtlinie ein separater Header gesendet wird.

Die folgenden Angaben sind beispielsweise gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit für ein `<iframe>` eine Funktion aktiviert ist, muss sein erlaubter Origin auch in der Allowlist der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es sinnvoll, im HTTP-Header die weiteste akzeptable Unterstützung für eine Funktion anzugeben und dann in jedem `<iframe>` die benötigte Teilmenge der Unterstützung festzulegen.

Um allen Origins den Zugriff auf Geolocation zu erlauben, würden Sie Folgendes verwenden:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Origin und andere anzuwenden, würden Sie Folgendes verwenden:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Wenn ein `<iframe>` standardmäßig zu einem anderen Origin navigiert, wird die Richtlinie nicht auf den Origin angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Origin, zu dem das `<iframe>` navigiert, im `allow`-Attribut aufführen, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Origin angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolons getrennte Liste von Richtlinien-Direktiven in das `allow`-Attribut aufgenommen wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Der Wert `src` verdient besondere Erwähnung. Wie oben erwähnt, bedeutet die Verwendung dieses Allowlist-Werts, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, sofern das darin geladene Dokument vom selben Origin wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standardwert_ für `allowlist` bei Funktionen, die in `allow` aufgeführt sind. Daher sind die folgenden Angaben gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die APIs Microphone (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Response-Header erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Origin-Liste werden die angegebenen Funktionen für alle Browsing-Kontexte deaktiviert (einschließlich aller `<iframe>`s), unabhängig von ihrem Origin.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Nehmen wir beispielsweise an, dass wir die Verwendung von Geolocation auf unserem eigenen Origin und in eingebetteten Inhalten unseres vertrauenswürdigen Werbenetzwerks aktivieren möchten. Wir könnten die seitenweite Permissions Policy wie folgt einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Origin `https://trusted-ad-network.com` wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Origin in `<iframe>` geladen würde, hätte er keinen Zugriff auf Geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

### Verstöße melden

Dieses Beispiel zeigt, wie Sie die Meldung von `Permissions-Policy`-Verstößen an einen Serverendpunkt konfigurieren.

Die folgenden Response-Header blockieren Geolocation und definieren den Namen des Reporting-Endpunkts für die Funktion als „geo_endpoint“.
Der HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} wird verwendet, um die URL dieses Endpunktnamens zu definieren.

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy: geolocation=();report-to=geo_endpoint
```

> [!NOTE]
> Um alle Berichte über Verstöße an denselben Endpunkt zu senden, könnten wir stattdessen den [`"default"`-Reporting-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) definieren:
>
> ```http
> Reporting-Endpoints: default="https://example.com/reports"
> Permissions-Policy: geolocation=()
> ```

Ein Verstoß tritt auf, wenn eine Seite versucht, die blockierte Funktion zu verwenden, beispielsweise:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Die an den Endpunkt gesendete [Berichts-Payload](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte wie folgt aussehen:

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> Die serverseitige Serialisierung von Verstoßberichten in Chrome verwendet `policyId` statt [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) für den Funktionsnamen im `body` eines Serverberichts.
> Der von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegebene [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) entspricht der Spezifikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- {{HTTPHeader("Permissions-Policy-Report-Only")}}
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [Reporting API](/de/docs/Web/API/Reporting_API)

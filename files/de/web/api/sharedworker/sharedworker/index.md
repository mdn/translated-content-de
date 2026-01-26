---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 4f58b2f343774ccb19cb262e64c19b5ae4d6702b
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> Das Skript, das an das `url` Element übergeben wird, wird ausgeführt.
> APIs wie diese sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell eine Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Worker/Worker#security_considerations) im `Worker()` Konstruktor für weitere Informationen.

Der **`SharedWorker()`** Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt, das das Skript an der angegebenen URL ausführt.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekt oder ein String, der die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.
    Diese muss mit dem Dokument des Aufrufers gleich-originiert sein, oder eine `blob:` oder `data:` URL sein.
    Die URL wird relativ zur aktuellen Position der HTML-Seite aufgelöst.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Umfang des Workers darstellt. Dies ist nützlich für das Erstellen neuer Instanzen desselben `SharedWorker` und für das Debuggen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Standardmäßig wird `classic` verwendet.
    - `credentials`
      - : Ein String, der festlegt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Modul-Worker importiert werden.
        Die zulässigen Werte sind dieselben wie bei einem [`fetch()` Request](/de/docs/Web/API/RequestInit#credentials): `omit`, `same-origin`, oder `include`.
        Der Standardwert ist `same-origin` (nur Anmeldeinformationen für gleich-originierte Anfragen einbeziehen).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Ein String, der einen
        identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Umfang des Workers darstellt, was hauptsächlich zu Debugging-Zwecken nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) für den Worker verfügbar sein sollen.
        Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies sind alle für den Worker verfügbar.
            Diese Option wird nur in Erstanbieter-Kontexten unterstützt und ist der Standard in Erstanbieter-Kontexten.
        - 'none'
          - : Nur `SameSite=None` Cookies sind für den Worker verfügbar.
            Diese Option wird in Erstanbieter- und Drittanbieter-Kontexten unterstützt und ist der Standard in Drittanbieter-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, z.B. wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies` Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er sollte _immer_ `text/javascript` sein (aus historischen Gründen könnten [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url` Parameter ein String ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`SharedWorker()`** Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [same-origin](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, darf jedoch selbst Skripte oder Module importieren, die cross-origin sind (wenn durch CORS und andere Einschränkungen erlaubt).
Wenn ein cross-origin Worker erforderlich ist, müssen Benutzer ihn von einem Zwischenarbeiter gleicher Herkunft oder einem Blob laden.

Für weitere Informationen siehe [Beschreibung](/de/docs/Web/API/Worker/Worker#description) im `Worker()` Konstruktor.

## Beispiele

Der Übersichtlichkeit halber verwenden die folgenden Beispiele keine [Trusted Types](/de/docs/Web/API/Trusted_Types_API).
In der Produktion sollte Ihr Code immer Trusted Types verwenden, wenn Daten, die von Benutzern stammen, an Injection-Sinks übergeben werden.

Für ein Beispiel siehe [Using Trusted Types](/de/docs/Web/API/Worker/Worker#using_trusted_types) in den `Worker()` Konstruktorbeispielen.

### Grundlegende Nutzung

Der folgende Code-Snippet zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekts mit dem `SharedWorker()` Konstruktor und die anschließende Nutzung des Objekts:

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Für ein vollständiges Beispiel siehe unser [Einfaches Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface, zu dem es gehört.

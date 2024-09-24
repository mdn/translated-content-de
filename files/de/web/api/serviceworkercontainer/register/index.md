---
title: "ServiceWorkerContainer: Methode register()"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 39ef2b1a33330cbcc1189513640f2152e82397ed
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`** Methode der
{{domxref("ServiceWorkerContainer")}} Schnittstelle erstellt oder aktualisiert eine
{{domxref("ServiceWorkerRegistration")}} für die angegebene `scriptURL`.

Bei Erfolg verbindet eine Service Worker-Registrierung die angegebene Skript-URL mit einem
_Gültigkeitsbereich_, der anschließend für die Navigation verwendet wird. Sie können diese Methode bedingungslos von der gesteuerten Seite aus aufrufen. D.h., Sie müssen nicht zuerst prüfen, ob eine aktive Registrierung vorliegt.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker Skripts. Die registrierte Service Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:

    - `scope`
      - : Ein String, der eine URL repräsentiert, die den
        Registrierungsbereich eines Service Workers definiert, d.h. welchen URL-Bereich ein Service Worker
        kontrollieren kann. Dies ist normalerweise eine relative URL. Sie ist relativ zur Basis-URL der
        Anwendung. Standardmäßig ist der `scope` Wert für eine Service Worker
        Registrierung auf das Verzeichnis gesetzt, in dem sich das Service Worker Skript befindet (durch Auflösung von `./` gegen `scriptURL`).
        Siehe den Abschnitt [Beispiele](#beispiele) für mehr Informationen darüber, wie es
        funktioniert.
    - `type`

      - : Ein String, der den Typ des zu erstellenden Workers spezifiziert. Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript. Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker ist in einem
            [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules)
            und der import-Befehl ist in
            Worker-Kontexten verfügbar. Für Informationen zur ES-Modul-Kompatibilität siehe die [Browser-Kompatibilitätsdaten-Tabelle für die `ServiceWorker` Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für Ressourcen des Service Worker Skripts während der Updates genutzt wird. Hinweis: Dies bezieht sich nur auf das Service Worker Skript und seine Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.

        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn kein frischer Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk geholt.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk geholt.
        - `'none'`
          - : Der HTTP-Cache wird nicht für das Hauptskript oder seine Importe genutzt. Alle Ressourcen des Service Worker Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("ServiceWorkerRegistration")}}
Objekt aufgelöst wird.

## Beispiele

Die hier beschriebenen Beispiele sollten zusammen betrachtet werden, um ein besseres Verständnis
dafür zu bekommen, wie sich der Gültigkeitsbereich von Service Worker auf eine Seite auswirkt.

Das folgende Beispiel verwendet den Standardwert von `scope` (indem es weggelassen wird). Nehmen wir an, der Service Worker Code befindet sich bei `example.com/sw.js` und der Registrierungscode bei `example.com/index.html`. Der Service Worker Code wird `example.com/index.html` steuern, sowie Seiten darunter, wie `example.com/product/description.html`.

```js
if ("serviceWorker" in navigator) {
  // Registrieren Sie einen Service Worker, der im Wurzelverzeichnis der
  // Website mit dem Standardbereich gehostet wird.
  navigator.serviceWorker.register("./sw.js").then(
    (registration) => {
      console.log("Service Worker-Registrierung erfolgreich:", registration);
    },
    (error) => {
      console.error(`Service Worker-Registrierung fehlgeschlagen: ${error}`);
    },
  );
} else {
  console.error("Service Worker werden nicht unterstützt.");
}
```

Der folgende Code, mit allem Code an derselben Stelle, würde auf genau dieselben Seiten wie das obige Beispiel angewendet werden. Alternativ würde sich der Service Worker, wenn sich der Code bei `example.com/product/sw.js` und der Registrierungscode bei `example.com/product/description.html` befindet, nur auf Ressourcen unter `example.com/product` anwenden. Bedenken Sie, dass der Gültigkeitsbereich, wenn angegeben, den Ort der Seite als Basis verwendet.

```js
if ("serviceWorker" in navigator) {
  // Gültigkeitsbereich manuell deklarieren
  navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(
    (registration) => {
      console.log("Service Worker-Registrierung erfolgreich:", registration);
    },
    (error) => {
      console.error(`Service Worker-Registrierung fehlgeschlagen: ${error}`);
    },
  );
} else {
  console.error("Service Worker werden nicht unterstützt.");
}
```

Es gibt häufig Verwirrung um die Bedeutung und Verwendung des _Gültigkeitsbereichs_. Ein Service Worker kann keinen breiteren Gültigkeitsbereich als seinen eigenen Standort haben, es sei denn, der Server gibt einen breiteren maximalen Gültigkeitsbereich in einem [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) Header im Service Worker Skript an. Daher sollten Sie die `scope` Option verwenden, wenn Sie einen _schmaleren_ Gültigkeitsbereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html`, am Wurzelverzeichnis einer Site, enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet werden.

```js
if ("serviceWorker" in navigator) {
  // Gültigkeitsbereich manuell deklarieren
  navigator.serviceWorker.register("./sw.js", { scope: "/product/" }).then(
    (registration) => {
      console.log("Service Worker-Registrierung erfolgreich:", registration);
    },
    (error) => {
      console.error(`Service Worker-Registrierung fehlgeschlagen: ${error}`);
    },
  );
} else {
  console.error("Service Worker werden nicht unterstützt.");
}
```

Wie oben erwähnt, können Server den Standardwert des maximalen Gültigkeitsbereichs ändern, indem sie den `Service-Worker-Allowed` Header auf dem Service Worker Skript setzen. In diesem Fall sollte die `scope` Option einen schmaleren Gültigkeitsbereich als den Headerwert angeben, der aber möglicherweise größer als der Ort des Service Workers ist.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet werden, wenn der Server den `Service-Worker-Allowed` Header auf `/` oder `https://example.com/` setzt, wenn `sw.js` bereitgestellt wird. Wenn der Server den Header nicht setzt, wird die Registrierung des Service Workers fehlschlagen, da der angeforderte `scope` zu breit ist.

```js
if ("serviceWorker" in navigator) {
  // Einen vergrößerten Gültigkeitsbereich deklarieren
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
    (registration) => {
      // Die Registrierung war erfolgreich, weil der Service-Worker-Allowed Header
      // einen erweiterten maximalen Gültigkeitsbereich für das Service Worker Skript gesetzt hat
      console.log("Service Worker-Registrierung erfolgreich:", registration);
    },
    (error) => {
      // Dies passiert, wenn der Service-Worker-Allowed Header den Gültigkeitsbereich nicht erweitert
      console.error(`Service Worker-Registrierung fehlgeschlagen: ${error}`);
    },
  );
} else {
  console.error("Service Worker werden nicht unterstützt.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorkerRegistration: Methode `unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)

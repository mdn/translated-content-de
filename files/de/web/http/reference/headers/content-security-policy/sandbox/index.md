---
title: "CSP: sandbox"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`sandbox`** ermöglicht eine Sandbox für die angeforderte
Ressource, ähnlich dem {{HTMLElement("iframe")}}-Attribut [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox).
Sie wendet Einschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Popups,
der Verhinderung der Ausführung von Plugins und Skripten und der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Document_directive", "Dokumentdirektive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht im {{HTMLElement("meta")}}
        Element oder durch das
        {{HTTPHeader("Content-Security-policy-Report-Only")}}
        Header-Feld unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

wobei `<value>` optional einer der folgenden Werte sein kann:

- `allow-downloads`
  - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob der JS-Code ihn ohne Benutzerinteraktion gestartet hat.
- `allow-forms`
  - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver und schließt auch keinen Dialog.
- `allow-modals`
  - : Ermöglicht der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Erlaubt der Ressource das [Sperren der Bildschirmorientierung](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Popups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/HTMLDialogElement/showModal)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem sandboxed-Dokument das Öffnen neuer Fenster, ohne die Sandbox-Flags darauf anzuwenden. Dies wird beispielsweise einem Drittanbieter-Werbeanzeigen ermöglichen, sicher sandboxed zu werden, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verlinkt.
- `allow-presentation`
  - : Erlaubt Einbettungen, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} fehlschlägt (was möglicherweise den Zugriff auf [Daten-/Cookie-Storage](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite das Ausführen von Skripten (jedoch nicht das Erstellen von Popup-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Erlaubt der Ressource, Zugriff auf die Speicherfunktionen des übergeordneten Objekts mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontexts (desjenigen mit dem Namen `_top`).
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontexts, jedoch nur, wenn sie durch eine Benutzeraktion initiiert wurde.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die in den Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die `allow-top-navigation` und verwandte Werte sind nur für eingebettete Dokumente (wie untergeordnete iframes) sinnvoll. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der oberste Browsing-Kontext das Dokument selbst ist.

## Beispiele

```http
Content-Security-Policy: sandbox allow-scripts;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut auf {{HTMLElement("iframe")}}
  Elementen

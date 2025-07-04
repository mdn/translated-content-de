---
title: "Content-Security-Policy: sandbox-Direktive"
short-title: sandbox
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`**-Direktive aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}}-[`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.
Sie legt Beschränkungen für die Aktionen einer Seite fest, einschließlich der Verhinderung von Pop-ups, der Ausführung von Plugins und Skripten sowie der Durchsetzung einer Same-Origin-Policy.

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
        Diese Direktive wird nicht im {{HTMLElement("meta")}}-Element oder durch das {{HTTPHeader("Content-Security-policy-Report-Only")}} Header-Feld unterstützt.
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
  - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zu einem Dateidownload führt.
    Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der JS-Code dies ohne Benutzerinteraktion initiiert hat.
- `allow-forms`
  - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Stichwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
- `allow-modals`
  - : Erlaubt der Seite das Öffnen von modalen Fenstern über [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Stichwort erlaubt ist. Es erlaubt auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Ermöglicht der Ressource das [Sperren der Bildschirmorientierung](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Pop-ups (erstellt beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`).
    Wenn dieses Stichwort nicht verwendet wird, schlägt die Anzeige von Pop-ups stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem in der Sandbox befindlichen Dokument, neue Fenster zu öffnen, ohne dass die Sandboxing-Flags darauf angewendet werden. Dies ermöglicht es beispielsweise, eine Drittanbieter-Werbung sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, auf die die Werbung verlinkt.
- `allow-presentation`
  - : Erlaubt den Einbettenden die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung angesehen, der immer an der {{Glossary("same-origin_policy", "Same-Origin-Policy")}} scheitert (was potenziell den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Stichwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Erlaubt der Ressource, Zugriff auf die Speicherkapazitäten des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource die Navigation des Top-Level-Browsing-Kontextes (desjenigen namens `_top`).
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource die Navigation des Top-Level-Browsing-Kontextes, aber nur wenn dies durch eine Benutzeraktion initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das `allow-popups` oder `allow-top-navigation` Schlüsselwort aktiviert.

> [!NOTE]
> Die Werte `allow-top-navigation` und verwandte Werte machen nur für eingebettete Dokumente (wie Kinder-Ifames) Sinn. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der Top-Level-Browsing-Kontext das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf {{HTMLElement("iframe")}}
  Elementen

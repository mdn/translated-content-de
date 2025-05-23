---
title: "Content-Security-Policy: sandbox directive"
short-title: sandbox
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`** aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut des {{HTMLElement("iframe")}}. Sie beschränkt die Aktionen einer Seite, einschließlich der Verhinderung von Popups, der Ausführung von Plugins und Skripten sowie der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Richtlinien-Typ</th>
      <td>{{Glossary("Document_directive", "Dokumentrichtlinie")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Richtlinie wird weder im {{HTMLElement("meta")}}-Element noch durch das
        {{HTTPHeader("Content-Security-policy-Report-Only")}}-Headerfeld unterstützt.
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
  - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut, sowie über die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der JS-Code dies ohne Benutzerinteraktion initiiert hat.
- `allow-forms`
  - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht benutzt wird, wird das Formular normal angezeigt, das Versenden löst jedoch keine Eingabeüberprüfung aus, sendet keine Daten an einen Webserver und schließt keinen Dialog.
- `allow-modals`
  - : Ermöglicht der Seite das Öffnen von modalen Fenstern über [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Ermöglicht der Ressource, die [Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Ermöglicht der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Ermöglicht Popups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/HTMLDialogElement/showModal)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem sandboxed-Dokument, neue Fenster zu öffnen, ohne die Sandbox-Einschränkungen auf sie anzuwenden. Dies ermöglicht z.B. einer Drittanbieteranzeige, sicher geschützt zu sein, ohne dieselben Einschränkungen auf die Seite zu erzwingen, zu der die Anzeige verlinkt.
- `allow-presentation`
  - : Ermöglicht Embedders die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} verletzt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Ermöglicht der Seite das Ausführen von Skripten (aber nicht das Erstellen von Popup-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Ermöglicht der Ressource das Anfordern des Zugriffs auf die Speicherfähigkeiten der übergeordneten Instanz mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- `allow-top-navigation`
  - : Ermöglicht der Ressource die Navigation im obersten Browsing-Kontext (demjenigen, der als `_top` bezeichnet wird).
- `allow-top-navigation-by-user-activation`
  - : Ermöglicht der Ressource die Navigation im obersten Browsing-Kontext, jedoch nur, wenn sie durch eine Benutzeraktion initiiert wurde.
- `allow-top-navigation-to-custom-protocols`
  - : Ermöglicht Navigationen zu nicht-`http`-Protokollen, die im Browser integriert oder [von einer Webseite registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die Werte `allow-top-navigation` und verwandte machen nur für eingebettete Dokumente (wie untergeordnete iframes) Sinn. Für eigenständige Dokumente haben diese Werte keine Wirkung, da das oberste Browsing-Kontext das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut auf {{HTMLElement("iframe")}}-Elementen

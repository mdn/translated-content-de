---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`**-Direktive aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut. Sie wendet Einschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Pop-ups, der Ausführung von Plugins und Skripten sowie der Durchsetzung einer Same-Origin-Richtlinie.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Dokumentdirektive](/de/docs/Glossary/Document_directive)</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}-Element oder im {{HTTPHeader("Content-Security-policy-Report-Only")}} Header-Feld nicht unterstützt.
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
  - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der JS-Code ihn ohne Benutzerinteraktion gestartet hat.
- `allow-forms`
  - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung, Datensendung an einen Webserver oder Schließen eines Dialogs aus.
- `allow-modals`
  - : Erlaubt der Seite das Öffnen modaler Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Ermöglicht der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Pop-ups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt die Funktionalität stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem sandgesperrten Dokument, neue Fenster zu öffnen, ohne die Sandboxing-Flags auf sie anzuwenden. Dies ermöglicht es beispielsweise, eine Drittanbieter-Anzeige sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verlinkt.
- `allow-presentation`
  - : Ermöglicht es Embedders, zu kontrollieren, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der immer an der [Same-Origin-Richtlinie](/de/docs/Glossary/same-origin_policy) scheitert (was potenziell den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Ermöglicht der Ressource, Zugriff auf die Speicherfähigkeiten des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Ermöglicht der Ressource, den top-level Browsing-Kontext (denjenigen, der `_top` genannt wird) zu navigieren.
- `allow-top-navigation-by-user-activation`
  - : Ermöglicht der Ressource, den top-level Browsing-Kontext zu navigieren, jedoch nur, wenn sie durch eine Benutzeraktion initiiert wurde.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die `allow-top-navigation` und verwandte Werte sind nur bei eingebetteten Dokumenten (wie z.B. untergeordneten iframes) sinnvoll. Bei eigenständigen Dokumenten haben diese Werte keine Wirkung, da der top-level Browsing-Kontext das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut bei {{HTMLElement("iframe")}}-Elementen

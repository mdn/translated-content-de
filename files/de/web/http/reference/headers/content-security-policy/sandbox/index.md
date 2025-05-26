---
title: "Content-Security-Policy: sandbox-Direktive"
short-title: sandbox
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: 40699574190b48488c35d37c89d631e15907c94e
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`**-Direktive aktiviert einen Sandbox-Modus für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut.
Sie wendet Einschränkungen auf die Aktionen einer Seite an, inklusive der Verhinderung von Pop-ups, der Ausführung von Plugins und Skripten sowie der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Document_directive", "Dokument-Direktive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht im {{HTMLElement("meta")}}-Element oder durch das {{HTTPHeader("Content-Security-policy-Report-Only")}}-Headerfeld unterstützt.
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
  - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt.
    Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob der JS-Code es ohne Benutzerinteraktion initiiert hat.
- `allow-forms`
  - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, keine Daten an einen Webserver senden oder ein Dialogfeld schließen.
- `allow-modals`
  - : Erlaubt der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} immer erlaubt ist, unabhängig von diesem Schlüsselwort. Es erlaubt der Seite auch den Empfang des [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent).
- `allow-orientation-lock`
  - : Ermöglicht der Ressource das [Sperren der Bildschirmorientierung](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Pop-ups (z.B. durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"` erstellt).
    Wenn dieses Schlüsselwort nicht verwendet wird, schlägt die Anzeige von Pop-ups lautlos fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem dokumentierten Sandbox das Öffnen neuer Fenster, ohne dass die Sandbox-Flags auf diese erzwungen werden. Dies ermöglicht es beispielsweise, eine Drittanbieter-Anzeige sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verweist.
- `allow-presentation`
  - : Erlaubt Einbettungen zu kontrollieren, ob ein iframe eine [Präsentationssitzung starten](/de/docs/Web/API/PresentationRequest) kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer an der {{Glossary("same-origin_policy", "Same-Origin-Policy")}} scheitert (potenziell wird der Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Ermöglicht der Ressource den Zugriff auf die Speicherkapazitäten des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontexts (der mit dem Namen `_top`).
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontexts, aber nur, wenn diese durch eine Benutzergeste initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser integriert sind oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die Schlüsselwörter `allow-top-navigation` und verwandte Werte sind nur für eingebettete Dokumente (wie z. B. untergeordnete iframes) sinnvoll. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der oberste Browsing-Kontext das Dokument selbst ist.

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

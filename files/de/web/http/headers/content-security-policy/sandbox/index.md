---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`sandbox`**-Direktive aktiviert eine Sandbox für die angeforderte
Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
Attribut. Sie wendet Einschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Pop-ups,
der Verhinderung der Ausführung von Plugins und Skripten und der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht vom {{HTMLElement("meta")}}
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
  - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download) Attribut, sowie über die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob dieser von JS-Code ohne Benutzerinteraktion initiiert wurde.
- `allow-forms`
  - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
- `allow-modals`
  - : Ermöglicht der Seite das Öffnen von modalen Fenstern durch {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}} und {{domxref("Window.prompt()")}}, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch, das {{domxref("BeforeUnloadEvent")}}-Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Ermöglicht der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Pop-ups (wie von {{domxref("Window.open()")}}, `target="_blank"`, {{domxref("Window.showModalDialog()")}}). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem sandboxed Dokument, neue Fenster zu öffnen, ohne die Sandboxing-Flags auf sie anzuwenden. Dies ermöglicht es zum Beispiel, eine Drittanbieter-Anzeige sicher zu sandboxen, ohne den gleichen Einschränkungen auf die Seite, zu der die Anzeige verlinkt, unterwerfen zu müssen.
- `allow-presentation`
  - : Ermöglicht Embedders die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung starten kann](/de/docs/Web/API/PresentationRequest).
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend betrachtet, der immer an der {{Glossary("same-origin policy")}} scheitert (was möglicherweise den Zugriff auf [Daten/Mookie-Speicher](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Ermöglicht der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Ermöglicht der Ressource, Zugriff auf die Speicherfunktionen des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontextes (desjenigen, der `_top` genannt wird).
- `allow-top-navigation-by-user-activation`
  - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontextes, aber nur, wenn sie durch eine Benutzeraktion initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die `allow-top-navigation` Werte und verwandte Werte sind nur in eingebetteten Dokumenten (wie Kind-Iframes) sinnvoll. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der oberste Browsing-Kontext das Dokument selbst ist.

## Beispiele

```http
Content-Security-Policy: sandbox allow-scripts;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut auf {{HTMLElement("iframe")}}
  Elementen

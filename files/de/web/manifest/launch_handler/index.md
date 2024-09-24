---
title: launch_handler
slug: Web/Manifest/launch_handler
l10n:
  sourceCommit: 880e0d7edf6b7effe44b08c4ff0f697a3e5a929a
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
  </tbody>
</table>

Das `launch_handler`-Mitglied definiert Werte, die den Start einer Webanwendung steuern. Zurzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App geladen werden soll, wenn sie gestartet wird. Zum Beispiel in einem vorhandenen Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die Definition weiterer `launch_handler`-Werte in der Zukunft.

## launch_handler-Elementwerte

`launch_handler`-Objekte können die folgenden Werte enthalten:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Mitglied</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>client_mode</code></td>
      <td><p>Ein String oder ein durch Kommas getrenntes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Falls ein Array von Strings angegeben ist, wird der erste gültige Wert verwendet. Mögliche Werte sind:</p>
      <dl>
        <dt><code>auto</code></dt>
        <dd>Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Beispielsweise könnte <code>navigate-existing</code> auf Mobilgeräten mehr Sinn machen, wo einzelne App-Instanzen verbreitet sind, während <code>navigate-new</code> im Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, der verwendet wird, wenn alle angegebenen Werte ungültig sind.</dd>
        <dt><code>focus-existing</code></dt>
        <dd>Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Vordergrund gebracht, aber nicht zur Ziel-URL des Starts navigiert. Die Ziel-URL wird über {{domxref("Window.launchQueue")}} verfügbar gemacht, um eine benutzerdefinierte Launch-Navigation zu ermöglichen. Falls die App nicht bereits in einem Web-App-Client geladen ist, wird das Verhalten von <code>navigate-new</code> verwendet.</dd>
        <dt><code>navigate-existing</code></dt>
        <dd>Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Vordergrund gebracht und zur angegebenen Ziel-URL des Starts navigiert. Die Ziel-URL wird über {{domxref("Window.launchQueue")}} verfügbar gemacht, um zusätzliche benutzerdefinierte Launch-Navigation zu ermöglichen. Falls die App nicht bereits in einem Web-App-Client geladen ist, wird das Verhalten von <code>navigate-new</code> verwendet.</dd>
        <dt><code>navigate-new</code></dt>
        <dd>Die App wird innerhalb eines neuen Web-App-Clients geladen. Die Ziel-URL wird über {{domxref("Window.launchQueue")}} verfügbar gemacht, um zusätzliche benutzerdefinierte Launch-Navigation zu ermöglichen.</dd>
      </dl>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

```json
"launch_handler": {
    "client_mode": "focus-existing"
}

"launch_handler": {
    "client_mode": ["focus-existing", "auto"]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App

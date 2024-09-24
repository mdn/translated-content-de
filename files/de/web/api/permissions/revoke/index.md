---
title: "Berechtigungen: revoke()-Methode"
short-title: revoke()
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}{{deprecated_header}}

Die **`revoke()`**-Methode der {{domxref("Permissions")}}-Schnittstelle setzt eine aktuell gesetzte Berechtigung auf ihren Standardzustand zurück, der normalerweise `prompt` ist. Diese Methode wird auf dem globalen {{domxref("Permissions")}}-Objekt {{domxref("navigator.permissions")}} aufgerufen.

Diese Methode wurde aus der Hauptspezifikation der Berechtigungen-API entfernt, da der Anwendungsfall unklar ist. Berechtigungen werden vom Browser verwaltet und das aktuell verwendete Berechtigungsmodell erlaubt es dem Seitenentwickler nicht, Berechtigungen direkt anzufordern oder zu widerrufen. Browser haben diese API hinter Präferenzen implementiert, aber es ist unwahrscheinlich, dass sie den Standardtrack erreicht. Für mehr Kontext siehe die [ursprüngliche Diskussion über das Entfernen von `permissions.revoke()`](https://github.com/w3c/permissions/issues/46).

## Syntax

```js-nolint
revoke(permissionDescriptor)
```

### Parameter

- `permissionDescriptor`

  - : Ein Objekt, das Optionen für den `revoke`-Vorgang festlegt. Die verfügbaren Optionen für diesen Deskriptor hängen von der Art der Berechtigung ab.

    Alle Berechtigungen haben einen Namen:

    - `name`
      - : Ein String, der den Namen der API enthält, deren Berechtigungen Sie abfragen möchten. Das zurückgegebene {{jsxref("Promise")}} wird mit einem {{jsxref("TypeError")}} fehlschlagen, wenn der Berechtigungsname nicht vom Browser unterstützt wird.

    Für die `push`-Berechtigungen können Sie auch angeben:

    - `userVisibleOnly` {{optional_inline}}
      - : (Nur Push, nicht unterstützt in Firefox — siehe den Abschnitt "Browserunterstützung" unten) Gibt an, ob Sie für jede Nachricht eine Benachrichtigung anzeigen oder stille Push-Benachrichtigungen senden möchten. Die Standardeinstellung ist `false`.

    Für die `midi`-Berechtigung können Sie auch angeben:

    - `sysex` {{optional_inline}}
      - : Gibt an, ob Sie System-Exklusivnachrichten benötigen und/oder empfangen. Die Standardeinstellung ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das seine Erfolgsroutine mit einem {{domxref("PermissionStatus")}}-Objekt aufruft, das das Ergebnis der Anfrage angibt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Abrufen der `PermissionDescriptor`-Informationen ist auf irgendeine Weise fehlgeschlagen, oder die Berechtigung existiert nicht oder wird derzeit nicht unterstützt (z.B. `midi` oder `push` mit `userVisibleOnly`).

## Beispiele

Diese Funktion kann von einer App verwendet werden, um zu verlangen, dass ihre eigene Geolocation-API-Berechtigung widerrufen wird.

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

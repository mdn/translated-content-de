---
title: "Permissions: revoke()-Methode"
short-title: revoke()
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}{{deprecated_header}}

Die **`revoke()`**-Methode des [`Permissions`](/de/docs/Web/API/Permissions)-Interfaces setzt eine aktuell gesetzte Berechtigung auf ihren Standardzustand zurück, der normalerweise `prompt` ist.
Diese Methode wird für das globale [`Permissions`](/de/docs/Web/API/Permissions)-Objekt [`navigator.permissions`](/de/docs/Web/API/Navigator/permissions) aufgerufen.

Diese Methode wurde aus der Hauptspezifikation der Berechtigungen-API entfernt, da der Anwendungsfall unklar ist.
Berechtigungen werden vom Browser verwaltet und das aktuelle Berechtigungsmodell erlaubt es den Entwicklern nicht, Berechtigungen ausdrücklich anzufordern oder zu widerrufen. Browser haben diese API hinter Präferenzen implementiert, aber es ist unwahrscheinlich, dass sie den Standardprozess erreichen wird.
Weitere Informationen finden Sie in der [ursprünglichen Diskussion zur Entfernung von `permissions.revoke()`](https://github.com/w3c/permissions/issues/46).

## Syntax

```js-nolint
revoke(permissionDescriptor)
```

### Parameter

- `permissionDescriptor`

  - : Ein Objekt, das Optionen für den `revoke`-Vorgang festlegt.
    Die verfügbaren Optionen für diesen Deskriptor hängen vom Berechtigungstyp ab.

    Alle Berechtigungen haben einen Namen:

    - `name`
      - : Ein String, der den Namen der API enthält, deren Berechtigungen Sie abfragen möchten.
        Das zurückgegebene {{jsxref("Promise")}} wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn der Berechtigungsname vom Browser nicht unterstützt wird.

    Für die `push`-Berechtigungen können Sie auch angeben:

    - `userVisibleOnly` {{optional_inline}}
      - : (Nur Push, nicht in Firefox unterstützt — siehe unten im Abschnitt Browser-Unterstützung) Gibt an, ob Sie eine Benachrichtigung für jede Nachricht anzeigen oder stille Push-Benachrichtigungen senden können möchten.
        Der Standardwert ist `false`.

    Für die `midi`-Berechtigung können Sie auch angeben:

    - `sysex` {{optional_inline}}
      - : Gibt an, ob Sie systemexklusive Nachrichten benötigen und/oder empfangen.
        Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das seinen Erfüllungshandler mit einem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt aufruft, das das Ergebnis der Anfrage angibt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Abrufen der `PermissionDescriptor`-Informationen ist aus irgendeinem Grund fehlgeschlagen oder die Berechtigung existiert nicht oder wird derzeit nicht unterstützt (z.B. `midi`, oder `push` mit `userVisibleOnly`).

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

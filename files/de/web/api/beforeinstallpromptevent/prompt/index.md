---
title: "BeforeInstallPromptEvent: prompt() Methode"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`prompt()`**-Methode des [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Interfaces erlaubt es einem Entwickler, das Installations-Prompt zu einem selbst gewählten Zeitpunkt anzuzeigen. Typischerweise wird diese Methode innerhalb des Event-Handlers für die benutzerdefinierte Installations-UI der Anwendung aufgerufen.

Diese Methode muss innerhalb des Event-Handlers für eine Benutzeraktion (wie z.B. einen Buttonklick) aufgerufen werden und darf nur einmal pro `BeforeInstallPromptEvent`-Instanz aufgerufen werden.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt mit den folgenden Eigenschaften aufgelöst wird:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob sich der Benutzer entschieden hat, die App zu installieren oder nicht. Er muss einen der folgenden Werte annehmen:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die gewählte Plattform benennt, welche einer der Werte aus der [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms)-Eigenschaft ist. Wenn der Benutzer sich dagegen entschieden hat, die App zu installieren, ist dies ein leerer String.

## Beispiele

Siehe das [Beispiel für das `BeforeInstallPromptEvent`-Interface](/de/docs/Web/API/BeforeInstallPromptEvent#examples).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Installierbare PWAs erstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Wie Sie Ihre eigene In-App-Installationserfahrung bieten](https://web.dev/articles/customize-install) auf web.dev (2021)

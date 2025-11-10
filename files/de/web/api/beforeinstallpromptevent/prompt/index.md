---
title: "BeforeInstallPromptEvent: prompt() Methode"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`prompt()`** Methode der [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Schnittstelle ermöglicht es einem Entwickler, das Installations-Prompt zu einem selbst gewählten Zeitpunkt anzuzeigen. Typischerweise wird sie im Ereignishandler der benutzerdefinierten Installations-UI der App aufgerufen.

Diese Methode muss im Ereignishandler für eine Benutzeraktion (wie zum Beispiel einen Button-Klick) aufgerufen werden und darf nur einmal auf einer gegebenen `BeforeInstallPromptEvent` Instanz aufgerufen werden.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der zu einem Objekt mit den folgenden Eigenschaften aufgelöst wird:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob der Benutzer sich entschieden hat, die App zu installieren oder nicht. Er muss einen der folgenden Werte haben:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die ausgewählte Plattform benennt, die einen der Werte der [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms)-Eigenschaft darstellt. Wenn der Benutzer sich entschieden hat, die App nicht zu installieren, ist dies ein leerer String.

## Beispiele

Siehe das [Beispiel für die `BeforeInstallPromptEvent` Schnittstelle](/de/docs/Web/API/BeforeInstallPromptEvent#examples).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zur Bereitstellung eines eigenen In-App-Installationserlebnisses](https://web.dev/articles/customize-install) auf web.dev (2021)

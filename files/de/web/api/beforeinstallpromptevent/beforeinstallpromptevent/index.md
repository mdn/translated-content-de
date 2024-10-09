---
title: "BeforeInstallPromptEvent: BeforeInstallPromptEvent() Konstruktor"
short-title: BeforeInstallPromptEvent()
slug: Web/API/BeforeInstallPromptEvent/BeforeInstallPromptEvent
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Der **`BeforeInstallPromptEvent()`** Konstruktor erstellt ein neues [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Objekt.

## Syntax

```js-nolint
new BeforeInstallPromptEvent(type)
new BeforeInstallPromptEvent(type, eventInitDict)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses, festgelegt auf `beforeinstallprompt`.
- `eventInitDict` {{optional_inline}}
  - : Ein Objekt mit einer einzigen optionalen Eigenschaft `platforms`, welche ein Array von Strings ist, das die Plattformen auflistet, auf denen das Ereignis ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWA installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zur Bereitstellung einer eigenen Installations-Erfahrung in der App](https://web.dev/articles/customize-install) auf web.dev (2021)

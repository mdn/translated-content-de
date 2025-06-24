---
title: "BeforeInstallPromptEvent: userChoice-Eigenschaft"
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`userChoice`**-Eigenschaft des [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Interfaces repräsentiert die Installationsauswahl, die der Benutzer getroffen hat, als er aufgefordert wurde, die App zu installieren.

## Wert

Ein {{jsxref("Promise")}}, der zu einem Objekt aufgelöst wird, das zwei Eigenschaften enthält:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob der Benutzer sich entschieden hat, die App zu installieren oder nicht. Er muss einer der folgenden Werte sein:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die ausgewählte Plattform benennt. Dies ist einer der Werte aus der [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms)-Eigenschaft. Wenn der Benutzer sich entschied, die App nicht zu installieren, ist dies ein leerer String.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zur Bereitstellung einer eigenen In-App-Installationserfahrung](https://web.dev/articles/customize-install) auf web.dev (2021)

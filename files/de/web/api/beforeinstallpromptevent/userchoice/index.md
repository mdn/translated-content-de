---
title: "BeforeInstallPromptEvent: userChoice-Eigenschaft"
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`userChoice`** Eigenschaft des {{domxref("BeforeInstallPromptEvent")}}-Interfaces repräsentiert die Installationswahl, die der Benutzer getroffen hat, als er aufgefordert wurde, die App zu installieren.

## Wert

Ein {{jsxref("Promise")}}, das zu einem Objekt mit zwei Eigenschaften führt:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob der Benutzer sich entschieden hat, die App zu installieren oder nicht. Es muss einer der folgenden Werte sein:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die gewählte Plattform benennt. Dieser Wert kommt aus der {{domxref("BeforeInstallPromptEvent.platforms")}}-Eigenschaft. Wenn der Benutzer sich entschieden hat, die App nicht zu installieren, ist dies ein leerer String.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Making PWAs installierbar](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Wie Sie Ihre eigene In-App-Installations-Erfahrung bereitstellen können](https://web.dev/articles/customize-install) auf web.dev (2021)

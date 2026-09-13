---
title: "LanguageModel: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageModel/availability_static
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`availability()`** statische Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle gibt einen Statusanzeiger zurück, der angibt, ob das Sprachmodell des Browsers einen gegebenen Satz von Konfigurationsoptionen unterstützt, ohne eine Sitzung zu erstellen oder einen Download auszulösen.

Verwenden Sie `availability()`, bevor Sie [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static) aufrufen, um festzustellen, ob die gewünschte Konfiguration unterstützt wird. Dies vermeidet, dass eine Sitzung nur gestartet wird, um dann zu scheitern, und ermöglicht es Ihnen, den Nutzern eine sinnvolle Alternative anzubieten, wenn die Konfiguration nicht unterstützt wird.

## Syntax

```js-nolint
LanguageModel.availability()
LanguageModel.availability(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das den grundlegenden Satz von Optionen repräsentiert, der verwendet wird, um die Unterstützung des Sprachmodells zu überprüfen.
    Die Eigenschaften umfassen:
    - `expectedInputs` {{optional_inline}}
      - : Ein Array von Objekten, das die erforderlichen Eingabemodalitäten und -sprachen repräsentiert.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Reiner Textinhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgegebener Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/info/rfc5646/)-Sprachtags enthält (zum Beispiel `en`, `fr`, `ja`), die Sprachen repräsentieren, die die Sitzung voraussichtlich behandelt. Der Benutzeragent verwendet diese Liste, um festzustellen, ob das Modell die angegebenen Sprachen unterstützt.
    - `expectedOutputs`
      - : Ein Array von Objekten, das die erforderlichen Ausgabemodalitäten und -sprachen repräsentiert.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Textueller Inhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgegebener Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/info/rfc5646/)-Sprachtags enthält (zum Beispiel `en`, `fr`, `ja`), die die Sitzung ausgeben soll.
    - `tools`
      - : Ein Array von Objekten, das verfügbare Werkzeuge für die KI repräsentiert.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `name`
          - : Eine Zeichenfolge, die dem Werkzeug einen eindeutigen Namen gibt, mit dem das Modell es bei der Ausgabe eines Werkzeugaufrufs referenziert.
        - `description`
          - : Eine Beschreibung, was das Werkzeug tut.
            Das Modell verwendet diese Beschreibung, um zu entscheiden, wann und ob das Werkzeug aufgerufen werden soll.
        - `inputSchema`
          - : Ein Objekt, das ein [JSON Schema](https://json-schema.org/) enthält, das die Eingabeparameter des Werkzeugs beschreibt.
            Das Modell verwendet dieses Schema, um die Argumente zu konstruieren, die es der `execute`-Funktion des Werkzeugs übergibt.
        - `execute`
          - : Eine Rückruffunktion, die der Benutzeragent aufruft, wenn das Modell dieses Werkzeug aufruft.
            Es kann alle vom Modell bereitgestellten Argumente wie erforderlich empfangen und gibt ein {{jsxref("Promise")}} zurück, das mit einer {{jsxref("String")}} aufgelöst wird, die das Ergebnis des Werkzeugs darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der unten aufgeführten Werte aufgelöst wird.

- `available`
  - : Das Modell ist bereit zur Verwendung mit den angegebenen Optionen.
- `downloadable`
  - : Das Modell kann die gegebenen Optionen unterstützen, benötigt jedoch zusätzliche Daten zum Herunterladen, um dies zu ermöglichen. Der Download hat noch nicht begonnen.
- `downloading`
  - : Das Modell kann die gegebenen Optionen mit einem zusätzlichen Daten-Download unterstützen. Der Download ist derzeit im Gange.
- `unavailable`
  - : Das Modell kann die angegebenen Optionen nicht unterstützen oder der Benutzeragent kann die Verfügbarkeit nicht bestimmen, beispielsweise aufgrund eines {{Glossary("Transient_activation", "transienten Aktivierungsfehlers")}}. In diesem Fall sollte der Anrufer erneut versuchen oder auf eine alternative Implementierung zurückgreifen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das aufrufende Dokument nicht vollständig aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.

## Beispiele

Siehe auch [Verwendung der Prompt API > Überprüfen der Konfigurationsunterstützung](/de/docs/Web/API/Prompt_API/Using#checking_configuration_support) und das [Vollständige Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) auf derselben Seite.

### Anfordern von Unterstützung für Eingabe

Dieses Beispiel zeigt, wie man feststellt, ob Text- und Bildeingaben vom Modell unterstützt werden.

```js
const status = await LanguageModel.availability({
  expectedInputs: [{ type: "text" }, { type: "image" }],
});
```

### Überprüfen der Verfügbarkeit für eine bestimmte Sprache

Dieses Beispiel prüft, ob das Modell Englisch unterstützt, bevor es darum gebeten wird, japanischen Text ins Englische zu übersetzen.

```js
const status = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["ja"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

if (status === "available") {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["ja"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });

  const translation = await session.prompt([
    {
      role: "user",
      content: "Translate the following text into English",
    },
    {
      role: "user",
      content: "桜はきれいです",
    },
  ]);

  console.log(translation);
}
```

### Überprüfen der Verfügbarkeit für multimodale Eingabe

[Multimodale Eingaben](/de/docs/Web/API/Prompt_API/Multimodal) beschreiben Sitzungen, die mehr als eine Eingabeart verwenden können, wie zum Beispiel Text und Bilder.
Da die Verfügbarkeit von Eingabetypen je nach Sprachmodell variiert, sollte Ihr Code die Verfügbarkeit der gewünschten Modi prüfen, bevor eine Sitzung erstellt wird.
Hier wird ein Beispiel gezeigt.

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text" }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

if (availability === "unavailable") {
  console.warn("This configuration is not supported.");
} else {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text" }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)

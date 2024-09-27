---
title: "Window: showModalDialog() Methode"
short-title: showModalDialog()
slug: Web/API/Window/showModalDialog
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!WARNING]
> Diese Funktion wurde entfernt. Bitte beheben Sie Ihre Websites und Anwendungen.
>
> Diese Methode wurde in Chrome 43 und Firefox 56 entfernt.

Die **`Window.showModalDialog()`** Methode erstellte und zeigte ein modales Dialogfenster an, das ein bestimmtes HTML-Dokument enthielt.

## Syntax

```js-nolint
showModalDialog(uri)
showModalDialog(uri, arguments)
showModalDialog(uri, arguments, options)
```

### Parameter

- `uri`
  - : Ist die URL des Dokuments, das im Dialog angezeigt werden soll.
- `arguments` {{optional_inline}}
  - : An den Dialog übergebene Werte.
- `options` {{optional_inline}}
  - : Ein String, der die Fensterverzierungen für den Dialog angibt und eine oder mehrere durch Semikolon getrennte Werte verwendet:

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Syntax</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>center: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        Wenn <code>on</code>, <code>yes</code> oder <code>1</code> angegeben ist, wird das Dialogfenster auf dem Desktop zentriert; andernfalls ist es verborgen. Standard ist <code>yes</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>dialogheight: <em>height</em></code>
      </td>
      <td>Die Höhe des Dialogfensters in Pixeln.</td>
    </tr>
    <tr>
      <td>
        <code>dialogleft: <em>left</em></code>
      </td>
      <td>Abstand des Dialogfensters vom linken Rand des Desktops.</td>
    </tr>
    <tr>
      <td>
        <code>dialogwidth: <em>width</em></code>
      </td>
      <td>Die Breite des Dialogfensters in Pixeln.</td>
    </tr>
    <tr>
      <td>
        <code>dialogtop: <em>top</em></code>
      </td>
      <td>Abstand des Dialogfensters vom oberen Rand des Desktops.</td>
    </tr>
    <tr>
      <td><code>resizable: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        Wenn der Wert dieses Arguments <code>on</code>, <code>yes</code> oder 1 ist, kann das Dialogfenster von der Benutzerin oder dem Benutzer skaliert werden; andernfalls ist seine Größe fest. Der Standardwert ist <code>no</code>.
      </td>
    </tr>
    <tr>
      <td><code>scroll: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        Wenn <code>on</code>, <code>yes</code> oder 1 angegeben ist, hat das Dialogfenster Scrollleisten; andernfalls ist seine Größe fest. Standard ist <code>no</code>.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Firefox implementiert nicht die `dialogHide`, `edge`, `status` oder `unadorned` Argumente.

### Rückgabewert

Beinhaltet die `returnValue` Eigenschaft, wie sie durch das Dokument, das durch `uri` spezifiziert ist, festgelegt wurde.

## Spezifikationen

- [MSDN Seite für `showModalDialog`](<https://learn.microsoft.com/en-us/previous-versions/ms536759(v=vs.85)>)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}, ein Ersatz für `window.showModalDialog()`.
- [showModalDialog Polyfill](https://github.com/niutech/showModalDialog)
  mittels {{HTMLElement("dialog")}} und [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*)

---
title: ::file-selector-button
slug: Web/CSS/::file-selector-button
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Das **`::file-selector-button`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den Button eines {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).

{{InteractiveExample("CSS Demo: ::file-selector-button", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 1rem;
}

input::file-selector-button {
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
  border-radius: 3px;
}
```

```html interactive-example
<label for="avatar">Choose a profile picture:</label><br />

<input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
```

## Syntax

```css
::file-selector-button {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", "100%", 150)}}

Beachten Sie, dass `::file-selector-button` ein ganzes Element ist und daher den Regeln des UA-Stylesheets entspricht. Insbesondere werden Schriftarten und Farben nicht unbedingt vom `input`-Element vererbt.

### Fallback-Beispiel

#### HTML

```html
<form>
  <label for="fileUpload">Upload file</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Ergebnis

{{EmbedLiveSample("Fallback_example", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)

---
title: "::file-selector-button"
slug: Web/CSS/::file-selector-button
l10n:
  sourceCommit: 62c5c3f5655002f230bf0153fbdf8a883611014a
---

{{CSSRef}}

Der **`::file-selector-button`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Schaltfläche eines {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Element/input/file).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-file-selector-button.html", "tabbed-shorter")}}

## Syntax

```css
selector::file-selector-button
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

Beachten Sie, dass `::file-selector-button` ein ganzes Element ist und somit den Regeln des UA-Stylesheets folgt. Insbesondere Schriften und Farben werden nicht unbedingt vom `input`-Element geerbt.

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

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Unterstützung der File and Directory Entries API in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)

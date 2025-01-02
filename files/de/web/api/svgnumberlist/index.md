---
title: SVGNumberList
slug: Web/API/SVGNumberList
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

## SVG-Nummerlistenschnittstelle

Das `SVGNumberList` definiert eine Liste von [`SVGNumber`](/de/docs/Web/API/SVGNumber) Objekten.

Ein `SVGNumberList` Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

Ein `SVGNumberList` ist indizierbar und kann wie ein Array angesprochen werden.

### Überblick über die Schnittstelle

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Methoden</th>
      <td>
        <ul>
          <li><code>void clear()</code></li>
          <li>
            [`SVGNumber`](/de/docs/Web/API/SVGNumber)
            <code
              >initialize(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
              <var>newItem</var>)</code
            >
          </li>
          <li>
            [`SVGNumber`](/de/docs/Web/API/SVGNumber)
            <code>getItem(in unsigned long <var>index</var>)</code>
          </li>
          <li>
            [`SVGNumber`](/de/docs/Web/API/SVGNumber)
            <code
              >insertItemBefore(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
              <var>newItem</var>, in unsigned long <var>index</var>)</code
            >
          </li>
          <li>
            [`SVGNumber`](/de/docs/Web/API/SVGNumber)
            <code
              >replaceItem(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
              <var>newItem</var>, in unsigned long <var>index</var>)</code
            >
          </li>
          <li>
            [`SVGNumber`](/de/docs/Web/API/SVGNumber)
            <code>removeItem(in unsigned long <var>index</var>)</code>
          </li>
          <li>
            [`SVGNumber`](/de/docs/Web/API/SVGNumber)
            <code
              >appendItem(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
              <var>newItem</var>)</code
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Eigenschaften</th>
      <td>
        <ul>
          <li>readonly unsigned long <code>numberOfItems</code></li>
          <li>
            readonly unsigned long
            <code>length</code> {{ non-standard_inline() }}
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a href="https://www.w3.org/TR/SVG/types.html#InterfaceSVGNumberList"
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

| Name                                                            | Typ           | Beschreibung                          |
| --------------------------------------------------------------- | ------------- | ------------------------------------- |
| [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems) | unsigned long | Die Anzahl der Elemente in der Liste. |
| [`length`](/de/docs/Web/API/SVGNumberList/length)               | unsigned long | Die Anzahl der Elemente in der Liste. |

## Instanzmethoden

<table class="standard-table">
  <thead>
    <tr>
      <th>Name &amp; Argumente</th>
      <th>Rückgabetyp</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><strong>[`clear`](/de/docs/Web/API/SVGNumberList/clear)</strong>()</code>
      </td>
      <td><var>void</var></td>
      <td>
        <p>
          Entfernt alle vorhandenen aktuellen Elemente aus der Liste, so dass die Liste leer ist.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`initialize`](/de/docs/Web/API/SVGNumberList/initialize)</strong>(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
          <var>newItem</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Entfernt alle vorhandenen aktuellen Elemente aus der Liste und initialisiert die Liste mit dem angegebenen Einzelteil
          <code><var>newItem</var></code
          >. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus der vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in die Liste eingefügt wurde.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>[`getItem`](/de/docs/Web/API/SVGNumberList/getItem)</strong>(in unsigned long <var>index</var>)</code>
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen, die am Element vorgenommen werden, werden sofort in der Liste widergespiegelt. Das erste Element hat die Nummer <code>0</code>.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`insertItemBefore`](/de/docs/Web/API/SVGNumberList/insertItemBefore)</strong>(in
          [`SVGNumber`](/de/docs/Web/API/SVGNumber) <var>newItem</var>, in unsigned
          long <var>index</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat die Nummer <code>0</code>.
        </p>
        <p>
          Wenn <code><var>newItem</var></code> bereits in einer Liste ist, wird es aus der vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements vor der Entfernung des Elements ist.
        </p>
        <p>
          Wenn der <code><var>index</var></code> gleich <code>0</code> ist, wird das neue Element am Anfang der Liste eingefügt. Ist der Index größer oder gleich <code>numberOfItems</code>, wird das neue Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`replaceItem`](/de/docs/Web/API/SVGNumberList/replaceItem)</strong>(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
          <var>newItem</var>, in unsigned long <var>index</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn
          <code><var>newItem</var></code> bereits in einer Liste ist, wird es aus der vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements ist.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn
            <code><var>index</var></code
            > größer oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`removeItem`](/de/docs/Web/API/SVGNumberList/removeItem)</strong>(in unsigned long <var>index</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>Entfernt ein vorhandenes Element aus der Liste.</p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn
            <code><var>index</var></code
            > größer oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`appendItem`](/de/docs/Web/API/SVGNumberList/appendItem)</strong>(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
          <var>newItem</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Fügt ein neues Element am Ende der Liste ein. Wenn
          <code><var>newItem</var></code> bereits in einer Liste ist, wird es aus der vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

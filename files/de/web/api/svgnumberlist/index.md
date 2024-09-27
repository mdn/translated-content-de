---
title: SVGNumberList
slug: Web/API/SVGNumberList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für SVG-Zahlenliste

Die `SVGNumberList` definiert eine Liste von [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekten.

Ein `SVGNumberList`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

Eine `SVGNumberList` ist indizierbar und kann wie ein Array angesprochen werden.

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
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

| Name                                 | Typ           | Beschreibung                          |
| ------------------------------------ | ------------- | ------------------------------------- |
| `numberOfItems`                      | unsigned long | Die Anzahl der Elemente in der Liste. |
| `length` {{ non-standard_inline() }} | unsigned long | Die Anzahl der Elemente in der Liste. |

## Instanzmethoden

<table class="standard-table">
  <thead>
    <tr>
      <th>Name &amp; Argumente</th>
      <th>Rückgabewert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><strong>clear</strong>()</code>
      </td>
      <td><var>void</var></td>
      <td>
        <p>
          Löscht alle vorhandenen aktuellen Elemente aus der Liste, sodass eine
          leere Liste entsteht.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>initialize</strong>(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
          <var>newItem</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Löscht alle vorhandenen aktuellen Elemente aus der Liste und
          initialisiert die Liste neu, um das angegebene einzelne Element
          <code><var>newItem</var></code
          > zu halten. Wenn das eingefügte Element bereits in einer Liste ist,
          wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste
          eingefügt wird. Das eingefügte Element ist das Element selbst und
          keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(in unsigned long <var>index</var>)</code>
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene
          Element ist das Element selbst und keine Kopie. Alle vorgenommenen
          Änderungen am Element werden sofort in der Liste widerspiegelt. Das
          erste Element hat die Nummer <code>0</code>.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>insertItemBefore</strong>(in
          [`SVGNumber`](/de/docs/Web/API/SVGNumber) <var>newItem</var>, in unsigned
          long <var>index</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Fügt ein neues Element an der angegebenen Position in die Liste ein.
          Das erste Element hat die Nummer <code>0</code>.
        </p>
        <p>
          Wenn <code><var>newItem</var></code> bereits in einer Liste ist, wird
          es aus seiner vorherigen Liste entfernt, bevor es in diese Liste
          eingefügt wird. Das eingefügte Element ist das Element selbst und
          keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten
          Sie, dass der Index des einzufügenden Elements vor der Entfernung des
          Elements liegt.
        </p>
        <p>
          Wenn der <code><var>index</var></code> gleich <code>0</code> ist, wird
          das neue Element an den Anfang der Liste eingefügt. Wenn der Index
          größer oder gleich <code>numberOfItems</code> ist, wird das neue
          Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>replaceItem</strong>(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
          <var>newItem</var>, in unsigned long <var>index</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Ersetzt ein vorhandenes Element in der Liste durch ein neues Element.
          Wenn <code><var>newItem</var></code> bereits in einer Liste ist, wird
          es aus seiner vorherigen Liste entfernt, bevor es in diese Liste
          eingefügt wird. Das eingefügte Element ist das Element selbst und
          keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten
          Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des
          Elements liegt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
          </li>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
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
          ><strong>removeItem</strong>(in unsigned long <var>index</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>Entfernt ein vorhandenes Element aus der Liste.</p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
          </li>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
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
          ><strong>appendItem</strong>(in [`SVGNumber`](/de/docs/Web/API/SVGNumber)
          <var>newItem</var>)</code
        >
      </td>
      <td>[`SVGNumber`](/de/docs/Web/API/SVGNumber)</td>
      <td>
        <p>
          Fügt ein neues Element am Ende der Liste ein. Wenn
          <code><var>newItem</var></code> bereits in einer Liste ist, wird es
          aus seiner vorherigen Liste entfernt, bevor es in diese Liste
          eingefügt wird. Das eingefügte Element ist das Element selbst und
          keine Kopie.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die
            Liste einem schreibgeschützten Attribut entspricht oder das Objekt selbst
            schreibgeschützt ist.
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
